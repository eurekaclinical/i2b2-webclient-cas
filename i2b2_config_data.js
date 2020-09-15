{
    urlProxy: "index.php",
    urlFramework: "js-i2b2/",
    casDomain: "EmoryQA",
        //-------------------------------------------------------------------------------------------
        // THESE ARE ALL THE DOMAINS A USER CAN LOGIN TO
        lstDomains: [
                { domain: "EmoryQA",
                  name: "Emory QA",
                  urlCellPM: "http://i2b2srvsqa1:9090/i2b2/services/PMService/",
                  allowAnalysis: true,
                  debug: true,
		  "CAS_server": "https://login.emory.edu:4443/idp/profile/cas/",
                  "cas_server": "https://login.emory.edu:4443/idp/profile/cas/",
                  "CAS_LOGOUT_TYPE": "LOCAL",
                  "EC_LOGOUT_LANDING_PAGE_URL": "https://i2b2webqa1.cc.emory.edu?logout=true",
                  "EC_I2B2_INTEGRATION_URL": "https://i2b2webqa1.cc.emory.edu/eurekaclinical-i2b2-integration-webapp",
                  "EC_USER_AGREEMENT_URL": "https://i2b2webqa1.cc.emory.edu/eurekaclinical-user-agreement-webapp",
                  "EC_SUPPORT_CONTACT": "vjavvaj@emory.edu"
                }
        ]
        //-------------------------------------------------------------------------------------------
}
