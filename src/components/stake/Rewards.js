import React from 'react';
import moment from 'moment';
import { commonColors } from '../../styles/theme';
import CustomButton from '../shared/CustomButton';
import InfoPopup from '../shared/InfoPopup';
import Label from '../shared/Label';
import CommonWrapper from './CommonWrapper';
import PentalityRewardsInfo from './PentalityRewardsInfo';

const Rewards = ({ amount, stakedTimeStart, rewardsPenalty, disabled, onWithdrawClick }) => {
  /*
    If you unstake during the first 72hours you will incur in a penalty: 3% flat penalty on your staked amount. 
    If you withdraw your rewards during the first 60 days, you will incur in a penalty: the penalty will only affect your accumulated rewards 
    and exponentially decreases in time. Your initial capital will not be affected.
  */
  const getPenaltyPercentage = () => {
    const diffHours = moment().diff(stakedTimeStart, 'hours');
    const diffDays = moment().diff(stakedTimeStart, 'days');
    if (diffHours < 72) {
      return '3%';
    } else if (diffDays < 60) {
      return rewardsPenalty;
    }
    return '-';
  };

  return (
    <CommonWrapper gap={16} title="rewards">
      <div>
        <Label>Rewards Collected</Label>
        <Label fontSize={32}>{amount || '-'}</Label>
      </div>
      <div>
        <Label>Staking Time</Label>
        <Label fontSize={24} color={commonColors.green}>
          {(stakedTimeStart && moment(stakedTimeStart).fromNow()) || '-'}
        </Label>
      </div>
      <div>
        <div className="flex align-ce">
          <Label>Rewards Penalty</Label>
          <InfoPopup type="modal" title="Rewards Penalty">
            <PentalityRewardsInfo />
          </InfoPopup>
        </div>

        <Label fontSize={24} color={commonColors.green}>
          {getPenaltyPercentage()}
        </Label>
      </div>
      <CustomButton type="gradient" disabled={disabled} buttonStyle={{ marginTop: 4 }}>
        stake rewards
      </CustomButton>
      <CustomButton type="primary" disabled={disabled} onClick={() => onWithdrawClick()}>
        withdraw
      </CustomButton>
    </CommonWrapper>
  );
};

export default Rewards;
