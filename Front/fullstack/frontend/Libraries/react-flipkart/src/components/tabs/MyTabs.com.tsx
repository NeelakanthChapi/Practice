import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { TabList, TabPanel } from '@mui/lab';
import { TabContext } from '@mui/lab';
import { MyProps } from '../../pages/lessons/props/MyProps';
import { H1 } from '../../pages/lessons/elements/H1';
import { MyButton } from '../button/MyButton.com';
import { MyRatings } from '../ratting/MyRatings.com';
import { MyTooltip } from '../tooltit/MyTooltip.com';
import { MyTextield } from '../textfield/MyTextield.com';
import { MyFragment } from '../fragment/MyFragment.com';
import { MyUseStateHook } from '../hooks/MyUseStateHook.com';
import { MyUseEffect } from '../hooks/MyUseEffect.com';
import { MyAvtar } from '../avtar/MyAvtar.com';
import { TwowaysofCss } from '../2wysofcss/TwowaysofCss.com';
export let MyTabs: React.FC<{}> = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    console.log("newValue", typeof newValue)
    setValue(`${newValue}`);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="props" value="1" />
            <Tab label="Elemetnts" value="2" />
            <Tab label="Mui elements" value="3" />
            <Tab label="fragment" value="4" />
            <Tab label="hooks" value="5" />
            <Tab label="TwowaysofCss" value="6" />

          </TabList>
        </Box>
        <TabPanel value="1"><MyProps /></TabPanel>
        <TabPanel value="2"><H1 /></TabPanel>
        <TabPanel value="3"><MyButton /> <MyRatings /> <MyTextield /><MyAvtar/></TabPanel>
        <TabPanel value="4"> <MyFragment /></TabPanel>
        <TabPanel value="5"><h1>hookes</h1><p>Hooks allow function components to have access to state and other React features</p><MyUseStateHook/><MyUseEffect/></TabPanel>
         <TabPanel value="6"><h1>TwowaysofCss</h1><TwowaysofCss></TwowaysofCss></TabPanel>

      </TabContext>
    </Box>
  );
}