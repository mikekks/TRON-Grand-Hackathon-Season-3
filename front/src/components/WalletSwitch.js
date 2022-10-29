import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const WalletSwitch = () => {
    return (
        <div className="WalletSwitchStyle">
            <Tabs
                defaultActiveKey="wallet"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="spending" title="SPENDING">
                    SPENDING
                </Tab>
                <Tab eventKey="wallet" title="WALLET">
                    WALLET
                </Tab>
            </Tabs>
        </div>
    )
}

export default WalletSwitch;