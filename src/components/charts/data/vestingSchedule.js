import moment from 'moment';

export const getVestingScheduleData = (startDate, endDate) => {
  const vestingData = [];
  let currentDate = startDate;
  let i = 0;
  while (currentDate <= endDate) {
    vestingData.push({
      name: moment(currentDate).format('MMM YY'),
      DAO: daoVestingDataArray[i],
      Team: teamVestingDataArray[i],
      'Community Sales': saleVestingDataArray[i],
      'Liquidity Mining': liquidityMiningVestingDataArray[i],
    });
    currentDate = moment(currentDate).add(2, 'months').format('YYYY-MM-DD');
    i++;
  }
  return vestingData;
};

const saleVestingDataArray = [
  0.0, 0.0, 0.0, 2.5, 2.5, 3.75, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0,
  5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0,
  5.0, 5.0, 5.0, 5.0,
];

const teamVestingDataArray = [
  0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 3.75, 3.75, 3.75, 3.75, 3.75, 3.75, 3.75, 5.0, 5.0, 5.0,
  5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0,
  5.0, 5.0, 5.0, 5.0, 5.0,
];

const liquidityMiningVestingDataArray = [
  0.0, 0.0, 0.0, 0.0, 0.0, 5.0, 5.0, 5.0, 10.0, 10.0, 10.0, 15.0, 15.0, 15.0, 20.0, 20.0, 20.0, 25.0, 25.0, 25.0, 30.0, 30.0, 30.0, 35.0, 35.0, 35.0,
  40.0, 40.0, 40.0, 40.0, 40.0, 40.0, 40.0, 40.0, 40.0, 40.0, 40.0, 40.0, 40.0, 40.0, 40.0, 40.0, 40.0, 40.0, 40.0, 40.0, 40.0, 40.0, 40.0, 40.0,
  40.0, 40.0, 40.0, 40.0, 40.0, 40.0, 40.0, 40.0, 40.0, 40.0, 40.0, 40.0,
];

const daoVestingDataArray = [
  0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0, 6.0, 6.0, 7.0, 7.0, 8.0, 8.0, 9.0, 9.0,
  10.0, 10.0, 11.0, 11.0, 12.0, 12.0, 13.0, 13.0, 14.0, 14.0, 15.0, 15.0, 16.0, 16.0, 17.0, 17.0, 18.0, 18.0, 19.0, 19.0, 20.0, 20.0, 21.0, 21.0,
  22.0, 22.0, 23.0, 23.0, 24.0, 24.0, 25.0, 25.0, 25.0,
];
