import TransactionsTable from './TransactionsTable';

import { getAnalyticsDexscanPoolTransactions } from '../../api/kaddex-analytics';

const sort_tokens = ([tokenA, tokenB]) => tokenA === "KDA" ? [tokenB, tokenA] :
                                          tokenB === "KDA" ? [tokenA, tokenB] :
                                          tokenA < tokenB  ? [tokenA, tokenB] :
                                                             [tokenB, tokenA]


const TransactionsTablePool = ({pool}) => {
  const [tokenA, tokenB] = sort_tokens(pool.split(":"))

  return <TransactionsTable tokenA={tokenA} tokenB={tokenB} load_fct={(...args) => getAnalyticsDexscanPoolTransactions(pool, ...args)} />
}

export default TransactionsTablePool;
