import React from 'react';
import { Divider } from 'semantic-ui-react';
import { ROUTE_LIQUIDITY_POOLS } from '../../router/routes';
import { FlexContainer } from '../shared/FlexContainer';
import Label from '../shared/Label';

const LiquidityTablesInfo = ({ pathname }) => {
  return (
    <FlexContainer className="column" gap={16}>
      <Label fontSize={16}>Fees</Label>
      <Label>Forget about gas-fees by enabling the gas station.</Label>
     

      <Divider />
      <Label fontSize={16}>APR</Label>
      <Label>
        Standing for Annual Percentage Rate, it shows the estimated yearly interest generated by your tokens in the respective liquidity pool.
      </Label>
    </FlexContainer>
  );
};

export default LiquidityTablesInfo;
