	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.loadingCaption="Loading";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#000000";bookConfig.appLogoIcon="files/mobile-ext/appLogoIcon.png";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.HomeURL="%first page%";bookConfig.appLogoOpenWindow="Blank";bookConfig.toolbarColor="#000000";bookConfig.iconColor="#ECF5FB";bookConfig.pageNumColor="#333333";bookConfig.iconFontColor="#FFFFFF";bookConfig.FlipSound="Enable";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.ShareButtonVisible="Show";bookConfig.ThumbnailsButtonVisible="Show";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.ZoomButtonVisible="Yes";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Show";bookConfig.bookmarkBackground="#000000";bookConfig.bookmarkFontColor="#cccccc";bookConfig.SearchButtonVisible="Show";bookConfig.leastSearchChar="3";bookConfig.searchFontColor="#FFFFFF";bookConfig.PrintButtonVisible="Yes";bookConfig.BackgroundSoundButtonVisible="Enable";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="Yes";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.minZoomWidth="700";bookConfig.minZoomHeight="518";bookConfig.mouseWheelFlip="yes";bookConfig.DownloadButtonVisible="Hide";bookConfig.bgBeginColor="#E2E2E2";bookConfig.bgEndColor="#E2E2E2";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="files/mobile-ext/backGroundImgURL.jpg";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.6";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.pageBackgroundColor="#E8E8E8";bookConfig.flipshortcutbutton="Show";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="Yes";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.LinkDownColor="#800080";bookConfig.LinkAlpha="0.2";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.searchFontColor="#FFFDDD";bookConfig.totalPageCount=19;bookConfig.largePageWidth=1800;bookConfig.largePageHeight=2546;;bookConfig.securityType="1";bookConfig.bookTitle="家";bookConfig.productName="Flip PDF Professional";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="mobile/javascript/text_position[1].js";bookConfig.searchTextJS="mobile/javascript/search_config.js";bookConfig.normalPath="files/mobile/";bookConfig.largePath="files/mobile/";bookConfig.thumbPath="files/thumb/";bookConfig.userListPath="files/extfiles/users.js";bookConfig.UIBaseURL='mobile/';var language = [{ language : "Chinese",btnFirstPage:"第一页",btnNextPage:"下一页",btnLastPage:"最后一页",btnPrePage:"前一页",btnDownload:"下载",btnPrint:"打印",btnSearch:"搜索",btnClearSearch:"清除",frmSearchPrompt:"清除",btnBookMark:"目录",btnHelp:"帮助",btnHome:"主页",btnFullScreen:"全屏",btnDisableFullScreen:"普屏",btnSoundOn:"打开声音",btnSoundOff:"关闭声音",btnShareEmail:"分享",btnSocialShare:"朋友分享",btnZoomIn:"放大",btnZoomOut:"缩小",btnDragToMove:"拖动/移动",btnAutoFlip:"自动翻页",btnStopAutoFlip:"停止翻页",btnGoToHome:"返回主页",frmHelpCaption:"帮助",frmHelpTip1:"可以双击进行放大或缩小",frmHelpTip2:"拖动页面的个角可以进行翻页",frmPrintCaption:"打印窗口",frmPrintBtnCaption:"打印",frmPrintPrintAll:"打印所有页面",frmPrintPrintCurrentPage:"打印当前页",frmPrintPrintRange:"打印范围：",frmPrintExampleCaption:"例如：2,5,8-26",frmPrintPreparePage:"正在准备页：",frmPrintPrintFailed:"打印失败：",pnlSearchInputInvalid:"（最少需要输入3个字符）",loginCaption:"登录",loginInvalidPassword:"你输入的密码不正确！",loginPasswordLabel:"密码：",loginBtnLogin:"登录",loginBtnCancel:"取消",btnThumb:"缩略图",lblPages:"页数：",lblPagesFound:"找到页数：",lblPageIndex:"页",btnAbout:"关于",frnAboutCaption:"关于我们",btnSinglePage:"单页",btnDoublePage:"双页",btnSwicthLanguage:"切换语言",tipChangeLanguage:"请在下面选择一种语言",btnMoreOptionsLeft:"更多选择",btnMoreOptionsRight:"更多选择",btnFit:"自动适应",smallModeCaption:"点击全屏",btnAddAnnotation:"加注释",btnAnnotation:"注释列表",FlipPageEditor_SaveAndExit:"保存并退出",FlipPageEditor_Exit:"退出",DrawToolWindow_Redo:"重做",DrawToolWindow_Undo:"撤销",DrawToolWindow_Clear:"清除",DrawToolWindow_Brush:"笔刷",DrawToolWindow_Width:"笔刷宽度",DrawToolWindow_Alpha:"笔刷透明度",DrawToolWindow_Color:"笔刷顔色",DrawToolWindow_Eraser:"擦除",DrawToolWindow_Rectangular:"矩形",DrawToolWindow_Ellipse:"椭圆",TStuff_BorderWidth:"边框宽带",TStuff_BorderAlph:"边框透明度",TStuff_BorderColor:"字体顔色",DrawToolWindow_TextNote:"文本附注",AnnotMark:"书签",lastpagebtnHelp:"最后一页",firstpagebtnHelp:"第一页",homebtnHelp:"返回首页",aboubtnHelp:"关于",screenbtnHelp:"在一个完整的窗口中打开该应用程序",helpbtnHelp:"打开帮助窗口",searchbtnHelp:"从书页中搜索",pagesbtnHelp:"预览小册子的缩略图",bookmarkbtnHelp:"打开书签",AnnotmarkbtnHelp:"打开目录",printbtnHelp:"打印小册子",soundbtnHelp:"开启或关闭的声音",sharebtnHelp:"发送消息",socialSharebtnHelp:"社交分享",zoominbtnHelp:"放大",downloadbtnHelp:"下载宣传册",pagemodlebtnHelp:"单页和双页",languagebtnHelp:"切换语言",annotationbtnHelp:"添加批注",addbookmarkbtnHelp:"自定义书签",removebookmarkbtnHelp:"移除书签",updatebookmarkbtnHelp:"更新书签",btnShoppingCart:"购物车按钮",Help_ShoppingCartbtn:"购物车",Help_btnNextPage:"下页",Help_btnPrePage:"上页",Help_btnAutoFlip:"自动翻页",Help_StopAutoFlip:"停止自动翻页",btnaddbookmark:"添加",btndeletebookmark:"删除",btnupdatebookmark:"更新",frmyourbookmarks:"你的书签",frmitems:"项目",DownloadFullPublication:"整份出版物",DownloadCurrentPage:"当前页",DownloadAttachedFiles:"附件",lblLink:"分享链接",btnCopy:"复制按钮",infCopyToClipboard:"浏览器不支持剪切板功能",restorePage:"是否从上次的位置开始",tmpl_Backgoundsoundon:"背景音乐开",tmpl_Backgoundsoundoff:"背景音乐关",tmpl_Flipsoundon:"翻页声开",tmpl_Flipsoundoff:"翻页声关",Help_PageIndex:"当前页码",tmpl_PrintPageRanges:"页范围",tmpl_PrintPreview:"预览",btnSelection:"选择文字",loginNameLabel:"您的名字:",btnGotoPage:"跳至",btnSettings:"设置",soundSettingTitle:"移动版声音标题",closeFlipSound:"翻页声开关",closeBackgroundSound:"背景声开关",frmShareCaption:"分享",frmShareLinkLabel:"链接:",frmShareBtnCopy:"复制",frmShareItemsGroupCaption:"朋友分享",TAnnoActionPropertyStuff_GotoPage:"转到页",btnPageBack:"后退",btnPageForward:"前进",SelectTextCopy:"文本复制",selectCopyButton:"复制",TStuffCart_TypeCart:"购物车",TStuffCart_DetailedQuantity:"数量",TStuffCart_DetailedPrice:"价格",ShappingCart_Close:"关闭",ShappingCart_CheckOut:"付款",ShappingCart_Item:"项目",ShappingCart_Total:"总计",ShappingCart_AddCart:"添加到购物车",ShappingCart_InStock:"有货",TStuffCart_DetailedCost:"运费",TStuffCart_DetailedTime:"交货时间",TStuffCart_DetailedDay:"天数(s)",ShappingCart_NotStock:"无货",btnCrop:"截图",btnDragButton:"拖动",btnFlipBook:"翻页书",btnSlideMode:"水平滑动翻页",btnSinglePageMode:"单页模式",btnVertical:"上下翻页浏览",btnHotizontal:"左右翻页浏览",btnClose:"关闭",btnDoublePage:"双页",btnBookStatus:"视图",checkBoxInsert:"加入当前网页",lblLast:"这是最后一页。",lblFirst:"这是第一页。",lblFullscreen:"点击查看全屏",lblName:"名称",lblPassword:"密码",lblLogin:"登录",lblCancel:"取消",lblNoName:"用户名称不能为空。",lblNoPassword:"密码不能为空。",lblNoCorrectLogin:"请输入正确的用户名和密码。",btnVideo:"视频画廊",btnSlideShow:"幻灯片放映",pnlSearchInputInvalid:"（最少需要输入3个字符）",btnDragToMove:"拖动/移动",btnPositionToMove:"鼠标移动",lblHelp1:"拖动页面角查看",lblHelp2:"双点击放大，在",lblCopy:"复制",lblAddToPage:"添加到页面",lblPage:"页",lblTitle:"标题",lblEdit:"编辑",lblDelete:"删除",lblRemoveAll:"删除所有",tltCursor:"光标",tltAddHighlight:"添加高亮",tltAddTexts:"添加文本",tltAddShapes:"添加形状",tltAddNotes:"添加注释",tltAddImageFile:"添加图像文件",tltAddSignature:"添加签名",tltAddLine:"添加直线",tltAddArrow:"添加箭头",tltAddRect:"添加矩形",tltAddEllipse:"添加椭圆",lblDoubleClickToZoomIn:"双击进行放大。",frmShareCaption:"分享",frmShareLabel:"分享",frmShareInfo:"您可以轻松地分享本出版物中对社交网络。只需点击下面的相应按钮。",frminsertLabel:"插入到网站",frminsertInfo:"使用下面的代码本出版物中嵌入到你的网站。",btnQRCode:"扫描二维码",btnRotateLeft:"左转",lblSelectMode:"请选择显示方式",frmDownloadPreview:"Preview"},{ language : "English",btnFirstPage:"First",btnNextPage:"Next Page",btnLastPage:"Last",btnPrePage:"Previous Page",btnDownload:"Download",btnPrint:"Print",btnSearch:"Search",btnClearSearch:"Clear",frmSearchPrompt:"Clear",btnBookMark:"Table of content",btnHelp:"Help",btnHome:"Home",btnFullScreen:"Enable FullScreen",btnDisableFullScreen:"Disable FullScreen",btnSoundOn:"Sound On",btnSoundOff:"Sound Off",btnShareEmail:"Share",btnSocialShare:"Social Share",btnZoomIn:"Zoom In",btnZoomOut:"Zoom Out",btnDragToMove:"Move by mouse drag",btnAutoFlip:"Auto Flip",btnStopAutoFlip:"Stop Auto Flip",btnGoToHome:"Return Home",frmHelpCaption:"Help",frmHelpTip1:"Double click to zoom in or out",frmHelpTip2:"Drag the page corner to view",frmPrintCaption:"Print",frmPrintBtnCaption:"Print",frmPrintPrintAll:"Print All Pages",frmPrintPrintCurrentPage:"Print Current Page",frmPrintPrintRange:"Print Range",frmPrintExampleCaption:"Example: 2,5,8-26",frmPrintPreparePage:"Preparing Page:",frmPrintPrintFailed:"Print Failed:",pnlSearchInputInvalid:"(Minimal request length is 3 symbols)",loginCaption:"Login",loginInvalidPassword:"Not a valid password!",loginPasswordLabel:"Password:",loginBtnLogin:"Login",loginBtnCancel:"Cancel",btnThumb:"Thumbnails",lblPages:"Pages:",lblPagesFound:"Pages:",lblPageIndex:"Page",btnAbout:"About",frnAboutCaption:"About & Contact",btnSinglePage:"Single Page",btnDoublePage:"Double Page",btnSwicthLanguage:"Switch Language",tipChangeLanguage:"Please select a language below...",btnMoreOptionsLeft:"More Options",btnMoreOptionsRight:"More Options",btnFit:"Fit Window",smallModeCaption:"Click to view in fullscreen",btnAddAnnotation:"Add Annotations",btnAnnotation:"Annotations",FlipPageEditor_SaveAndExit:"Save and Exit",FlipPageEditor_Exit:"Exit",DrawToolWindow_Redo:"Redo",DrawToolWindow_Undo:"Undo",DrawToolWindow_Clear:"Clear",DrawToolWindow_Brush:"Brush",DrawToolWindow_Width:"Width",DrawToolWindow_Alpha:"Alpha",DrawToolWindow_Color:"Color",DrawToolWindow_Eraser:"Eraser",DrawToolWindow_Rectangular:"Rectangular",DrawToolWindow_Ellipse:"Ellipse",TStuff_BorderWidth:"Border Width",TStuff_BorderAlph:"Border Alpha",TStuff_BorderColor:"Border Color",DrawToolWindow_TextNote:"Text Note",AnnotMark:"Book Mark",lastpagebtnHelp:"Last page",firstpagebtnHelp:"First page",homebtnHelp:"Return to home page",aboubtnHelp:"About",screenbtnHelp:"Open this application in full-screen mode",helpbtnHelp:"Show help",searchbtnHelp:"Search from pages",pagesbtnHelp:"Take a look at the thumbnail of this brochure",bookmarkbtnHelp:"Open Bookmark",AnnotmarkbtnHelp:"Open Table of content",printbtnHelp:"Print the brochure",soundbtnHelp:"Turn on or off the sound",sharebtnHelp:"Send Email to",socialSharebtnHelp:"Social Share",zoominbtnHelp:"Zoom in",downloadbtnHelp:"Downdlaod this brochure",pagemodlebtnHelp:"Switch Single and double page mode",languagebtnHelp:"Switch Lauguage",annotationbtnHelp:"Add Annotation",addbookmarkbtnHelp:"Add Bookmark",removebookmarkbtnHelp:"Remove BookMark",updatebookmarkbtnHelp:"Update Bookmark",btnShoppingCart:"Shopping Cart",Help_ShoppingCartbtn:"Shopping Cart",Help_btnNextPage:"Next page",Help_btnPrePage:"Previous page",Help_btnAutoFlip:"Auto filp",Help_StopAutoFlip:"Stop atuo filp",btnaddbookmark:"Add",btndeletebookmark:"Delete",btnupdatebookmark:"Update",frmyourbookmarks:"Your bookmarks",frmitems:"items",DownloadFullPublication:"Full Publication",DownloadCurrentPage:"Current Page",DownloadAttachedFiles:"Attached Files",lblLink:"Link",btnCopy:"Copy Button",infCopyToClipboard:"Your browser does not support clipboard. ",restorePage:"Would you like to restore previous session",tmpl_Backgoundsoundon:"Background Sound On",tmpl_Backgoundsoundoff:"Background Sound Off",tmpl_Flipsoundon:"Flip Sound On",tmpl_Flipsoundoff:"Flip Sound Off",Help_PageIndex:"The current page number",tmpl_PrintPageRanges:"PAGE RANGES",tmpl_PrintPreview:"PREVIEW",btnSelection:"Select Text",loginNameLabel:"Name:",btnGotoPage:"Go",btnSettings:"Setting",soundSettingTitle:"Sound Setting",closeFlipSound:"Close Flip Sound",closeBackgroundSound:"Close Backgorund Sound",frmShareCaption:"Share",frmShareLinkLabel:"Link:",frmShareBtnCopy:"Copy",frmShareItemsGroupCaption:"Social Share",TAnnoActionPropertyStuff_GotoPage:"Go to page",btnPageBack:"Backward",btnPageForward:"Forward",SelectTextCopy:"Copy Selected Text",selectCopyButton:"Copy",TStuffCart_TypeCart:"Shopping Cart",TStuffCart_DetailedQuantity:"Quantity",TStuffCart_DetailedPrice:"Price",ShappingCart_Close:"Close",ShappingCart_CheckOut:"Checkout",ShappingCart_Item:"Item",ShappingCart_Total:"Total",ShappingCart_AddCart:"Add to cart",ShappingCart_InStock:"In Stock",TStuffCart_DetailedCost:"Shipping cost",TStuffCart_DetailedTime:"Delivery time",TStuffCart_DetailedDay:"day(s)",ShappingCart_NotStock:"Not enough in stock",btnCrop:"Crop",btnDragButton:"Drag",btnFlipBook:"Flip Book",btnSlideMode:"Slide Mode",btnSinglePageMode:"Single Page Mode",btnVertical:"Vertical Mode",btnHotizontal:"Horizontal Mode",btnClose:"Close",btnDoublePage:"Double Page",btnBookStatus:"Book View",checkBoxInsert:"Insert Current Page",lblLast:"This is the last page.",lblFirst:"This is the first page.",lblFullscreen:"Click to view in fullscreen",lblName:"Name",lblPassword:"Password",lblLogin:"Login",lblCancel:"Cancel",lblNoName:"User name can not be empty.",lblNoPassword:"Password can not be empty.",lblNoCorrectLogin:"Please enter the correct user name and password.",btnVideo:"Video Gallery",btnSlideShow:"Slide Show",pnlSearchInputInvalid:"(Minimal request length is 3 symbols)",btnDragToMove:"Move by mouse drag",btnPositionToMove:"Move by mouse position",lblHelp1:"Drag the page corner to view",lblHelp2:"Double click to zoom in, out",lblCopy:"Copy",lblAddToPage:"add to page",lblPage:"Page",lblTitle:"Title",lblEdit:"Edit",lblDelete:"Delete",lblRemoveAll:"Remove All",tltCursor:"cursor",tltAddHighlight:"add highlight",tltAddTexts:"add texts",tltAddShapes:"add shapes",tltAddNotes:"add notes",tltAddImageFile:"add image file",tltAddSignature:"add signature",tltAddLine:"add line",tltAddArrow:"add arrow",tltAddRect:"add rect",tltAddEllipse:"add ellipse",lblDoubleClickToZoomIn:"Double click to zoom in.",frmShareCaption:"Share",frmShareLabel:"Share",frmShareInfo:"You can easily share this publication to social networks.Just cilck the appropriate button below.",frminsertLabel:"Insert to Site",frminsertInfo:"Use the code below to embed this publication to your website.",btnQRCode:"Click to scan QR code",btnRotateLeft:"Rotate Left",lblSelectMode:"Select view mode please.",frmDownloadPreview:"Preview"}];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{}, "pageAnnos":[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]}; bookConfig.isFlipPdf=false;
	bookConfig.hideMiniFullscreen=true;
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}
