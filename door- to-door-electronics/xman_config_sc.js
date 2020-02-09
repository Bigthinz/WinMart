




AE.define('AE.common.xman.xmanConfig',function(){
  var xmanConfig = {
    isNew:'new',
    mode:'run',
    xloginPassport: "",
    passportDomain: "https://passport.alibaba.com",
    getLoginTypeName : "xlogin",
    getJoinTypeName : "d",
    intlHatchServer : "https://ushatch.alibaba.com",
    needUMID : eval("true"),
    umidToken : "B80e390610908b33be48c2834c3c807d3",
    umidTimestamp: "591808785455584851416275",
    umidServer: "https://ynuf.alibaba.com",
    getActionJsSslUrl : "https://acjsus.aliyun.com/js/ua.js",
    uaOptToken : "QHJnzD44mV1qUCojCo54OTMOVqhlZ29oQhWkZr9w8z9T2ixdUb/4mrgEOnVDFnOjazytfNSzmbBfLe+h2X/YU4vUeoNeeetIU8XTpnyAzlsQRzNLBDcBOzBL1vpwGX/7MQqo9TCfyis5NPIW1MNvbw==",
    tvsProxyDomainName : 'alibaba',
    currentXmanDomain : 'alibaba.com',
    imageSslUrl : 'https://captcha.alibaba.com/get_img?identity=alibaba.com&sessionid=0f3a43336bdd4c66994c1d2357e7815e&kjtype=b2b_default',
    getForgotPasswordLink : 'http://accounts.alibaba.com/user/company/forget_password_input_email.htm',
    i18nLadingPlsWait : 'Loading, Please wait....',
    // vmConfigs
            xlogin_js_url : 'https://login.alibaba.com/xman/xlogin.js?pd=alibaba&pageFrom=&u_token=B80e390610908b33be48c2834c3c807d3',
    xlogin_group_name : ['xloginPassportId','xloginPasswordId','xloginCheckTokenId'],
    xbind_group_name : ['xbindPassport','xbindPasswordId','xbindCheckToken'],
    xjoin_group_name : ['','xjoinEmail','xjoinPassword','xjoinCountry','xjoinBusinessRoleBuyer','xjoinBusinessRoleSupplier','xjoinBusinessRole','xjoinFirstName','xjoinLastName','xjoinGender','xjoinGenderF','xjoinCompanyName','xjoinPhoneCountry','xjoinPhoneArea','xjoinPhoneNumber','xjoinCheckToken','xjoinGroupName'],
    xjoin_js_url : 'https://login.alibaba.com/xman/xjoin.js?u_token=B80e390610908b33be48c2834c3c807d3&pd=alibaba&pageFrom=',
    xjoinbind_js_url : 'https://login.alibaba.com/xman/xbind.js?event_method=xjoinbind&xbind_partner_name='+window._xman_partner_name+'&xbind_partner_userid='+window._xman_partner_userid+'&pageFrom=&bindingSource=',
    xbind_js_url : 'https://login.alibaba.com/xman/xbind.js?event_method=xbind&xbind_partner_name='+window._xman_partner_name+'&xbind_partner_userid='+window._xman_partner_userid+'&bindingSource=',
    currentServer : "https://login.alibaba.com",
    countryNameByIP : "Anonymous Proxy",
    countryCodeByIP : "",
	  localIp : "",
    authorizeUrls : [],
    isShowFacebook: '',
    currentLocale: 'us',
    enableEdm:false,
    edmCountryList : []  };

  xmanConfig.xuidUrls = [];
      xmanConfig.xuidUrls.push('https://login.alibaba.com/xman/xuid.do?v=BdUA3PQbfk%2F23aXYlPS7V9cyh1Q%2FwkBtZrvRt6WJ1lgBRBnsKpks6V0l2FuJfZfq&ts=90FZ2p%2B9xTqNo5%2FgmyirF%2BEXL%2BikqRnuRIw0dbRBJleY17S1vJ4wcA%3D%3D');
      xmanConfig.xuidUrls.push('https://login.aliexpress.com/xman/xuid.do?v=BdUA3PQbfk%2F23aXYlPS7V9cyh1Q%2FwkBtZrvRt6WJ1lgBRBnsKpks6V0l2FuJfZfq&ts=90FZ2p%2B9xTqNo5%2FgmyirF%2BEXL%2BikqRnuRIw0dbRBJleY17S1vJ4wcA%3D%3D');
  
  // 抛回模块化配置
  this.exports = xmanConfig;
});
