/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAccountContext } from '../../contexts';
import { useErrorState } from '../../hooks/useErrorState';
import { getPairListAccountBalance } from '../../api/pact';
import { AddIcon, RemoveIcon } from '../../assets';
import tokenData from '../../constants/cryptoCurrencies';
import { ROUTE_LIQUIDITY_ADD_LIQUIDITY_DOUBLE_SIDED, ROUTE_LIQUIDITY_MY_LIQUIDITY, ROUTE_LIQUIDITY_REMOVE_LIQUIDITY } from '../../router/routes';
import { extractDecimal, getDecimalPlaces } from '../../utils/reduceBalance';
import AppLoader from '../shared/AppLoader';
import CommonTable from '../shared/CommonTable';
import { CryptoContainer, FlexContainer } from '../shared/FlexContainer';
import Label from '../shared/Label';
import CustomDropdown from '../shared/CustomDropdown';

const sortByOptions = [
  { key: 0, text: `Ascending`, value: 'ascending' },
  { key: 1, text: `Descending`, value: 'descending' },
];

const LiquidityMyLiquidityTable = () => {
  const history = useHistory();
  const { account } = useAccountContext();
  const [pairList, setPairList] = useErrorState([], true);
  const [loading, setLoading] = useState(false);
  const [orderBy, setOrderBy] = useState('descending');

  const fetchData = async () => {
    const result = await getPairListAccountBalance(account.account);
    orderPairs(result);
    setLoading(false);
  };

  useEffect(() => {
    if (account.account) {
      setLoading(true);
      fetchData();
    }
  }, [account.account]);

  useEffect(() => {
    if (pairList.length > 0) {
      orderPairs(pairList);
    }
  }, [orderBy]);

  const orderPairs = (pairs) => {
    let result = pairs.map((p) => ({ ...p, poolShare: p.poolShare || 0 }));
    if (orderBy === 'ascending') {
      result = result.sort((x, y) => x.poolShare - y.poolShare);
    } else {
      result = result.sort((x, y) => y.poolShare - x.poolShare);
    }

    setPairList(result);
  };
  return !loading ? (
    !account.account ? (
      <Label className="justify-ce">Please connect your wallet to see your liquidity. </Label>
    ) : (
      <div className="column">
        <div className="flex justify-sb" style={{ marginBottom: 16 }}>
          <Label fontSize={20} fontFamily="syncopate">
            MY LIQUIDITY
          </Label>

          <CustomDropdown
            containerStyle={{ minWidth: 134 }}
            title="sort by:"
            options={sortByOptions}
            onChange={(e, { value }) => {
              setOrderBy(value);
            }}
            value={orderBy}
          />
        </div>
        <CommonTable
          items={pairList}
          columns={renderColumns()}
          actions={[
            {
              icon: () => <AddIcon />,
              onClick: (item) =>
                history.push(ROUTE_LIQUIDITY_ADD_LIQUIDITY_DOUBLE_SIDED.concat(`?token0=${item.token0}&token1=${item.token1}`), {
                  from: ROUTE_LIQUIDITY_MY_LIQUIDITY,
                }),
            },
            {
              disabled: (item) => item.pooledAmount[0] === 0 || item.pooledAmount[1] === 0,
              icon: () => <RemoveIcon />,
              onClick: (item) => {
                const { token0, token1 } = item;
                history.push(ROUTE_LIQUIDITY_REMOVE_LIQUIDITY.concat(`?token0=${token0}&token1=${token1}`), { from: ROUTE_LIQUIDITY_MY_LIQUIDITY });
              },
            },
          ]}
        />
      </div>
    )
  ) : (
    <AppLoader containerStyle={{ height: '100%', alignItems: 'center', justifyContent: 'center' }} />
  );
};

export default LiquidityMyLiquidityTable;
const renderColumns = () => {
  return [
    {
      name: '',
      width: 160,
      render: ({ item }) => (
        <FlexContainer className="align-ce">
          <CryptoContainer style={{ zIndex: 2 }}>{tokenData[item.token0].icon} </CryptoContainer>
          <CryptoContainer style={{ marginLeft: -12, zIndex: 1 }}> {tokenData[item.token1].icon}</CryptoContainer>
          {item.token0}/{item.token1}
        </FlexContainer>
      ),
    },
    // {
    //   name: 'My Pool Tokens',
    //   width: 160,
    //   render: ({ item }) => pairUnit(extractDecimal(item.balance), 6),
    // },
    {
      name: 'Token A',
      width: 160,
      render: ({ item }) => `${getDecimalPlaces(extractDecimal(item.pooledAmount[0]))} ${item.token0}`,
    },

    {
      name: 'Token B',
      width: 160,
      render: ({ item }) => `${getDecimalPlaces(extractDecimal(item.pooledAmount[1]))} ${item.token1}`,
    },

    {
      name: 'My Pool Share',
      width: 160,
      render: ({ item }) => {
        return item.poolShare >= 0
          ? `${(item?.poolShare * 100).toPrecision(4)} %`
          : `${((extractDecimal(item.balance) / extractDecimal(item.supply)) * 100).toPrecision(4)} %`;
      },
    },
  ];
};
