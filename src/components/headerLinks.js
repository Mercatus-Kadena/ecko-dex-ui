import React from 'react';
import { CodeIcon, EckoWalletLogo, LinxLogoLight } from '../assets';

const headerLinks = [
  {
    id: 2,
    label: 'eckoWALLET',
    icon: <EckoWalletLogo />,
    link: 'https://chrome.google.com/webstore/detail/eckowallet/bofddndhbegljegmpmnlbhcejofmjgbn',
  },
  {
    id: 3,
    label: 'LinxWallet',
    icon: <LinxLogoLight />,
    link: 'https://play.google.com/store/apps/details?id=com.thinedgelabs.linx_wallet',
  },
  // {
  //   id: 2,
  //   label: 'Discord',
  //   icon: <DiscordIcon className="menu-icon" />,
  //   link: 'https://discord.com/invite/eckodao',
  // },
  {
    id: 0,
    label: 'Token Assets',
    icon: <CodeIcon className="menu-icon" />,
    link: 'https://github.com/Mercatus-Kadena/kadena_tokens',
  },
  {
    id: 1,
    label: 'Code',
    icon: <CodeIcon className="menu-icon" />,
    link: 'https://github.com/eckoDAO-org/ecko-dex-ui',
  },


];

export default headerLinks;
