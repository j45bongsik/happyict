<!DOCTYPE html>
<!-- <%
	dim now_year, now_month, now_day, now_hour, now_minute, now_second, now_micro, queryString
	now_year   = left(now(),4)
	now_month  = mid(now(),6,2)
	now_day    = mid(now(),9,2) 
	now_hour   = right("0" & hour(now), 2)
	now_minute = right("0" & minute(now), 2)
	now_second = right("0" & second(now), 2)
	now_micro  = right("000" & (timer * 1000) Mod 1000, 3)
	 
	queryString = now_year & now_month & now_day & now_hour & now_minute & now_second & now_micro
%> -->
<html lang="ko">

<head>
	<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<meta name="viewport" content="width=device-width" />
	<meta name="format-detection" content="telephone=no" />
	<title>SK holdings</title>
	<link href="/resources/css/font.css" rel="stylesheet" />
	<link href="/resources/css/animate.css" rel="stylesheet" />
	<link href="/resources/css/common.css" rel="stylesheet" />
	<link href="/resources/css/main.css?<%=queryString%>" rel="stylesheet" />
	<link href="/resources/css/sub.css?<%=queryString%>" rel="stylesheet" />

	<!-- <link href="/resources/path/favicon.ico" rel="shortcut icon" /> -->

	<!--[if lt IE 9]>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.js"></script>
		<![endif]-->

	<script src="/resources/js/jquery-3.4.1.min.js"></script>
	<script src="/resources/js/jquery-ui.min.js"></script>
	<script src="/resources/js/jquery.ba-throttle-debounce.min.js"></script>
	<script src="/resources/js/slick.js"></script>
	<script src="/resources/js/common.js?<%=queryString%>"></script>
	<script src="/resources/js/main.js?<%=queryString%>"></script>

	<!-- <script src="/resources/js/popup.js"></script> -->

</head>

<!-- 메인페이지 home 클래스 -->

<body class="home">

	<!-- popup -->

	<div id="hold_popup" class="modal_box">
		<div class="modal_header">
			<a href="javascript:popupClose();" class="popup_close">X</a>
		</div>
		<div class="modal_body">
			<strong class="tit">중간배당 기준일 공고</strong>
			<p class="txt">당사의 중간배당 실시여부 및 배당금은 이사회 결의를 통해 결정될 예정이며, 중간배당을 실시할 경우 정관 제47조에 의거하여 2020년 7월 1일 0시 현재 주주명부에 기재되어 있는 주주에게 배당을 실시할 예정입니다.</p>
	
			<div class="a-r">
				<p class="txt">2020년 6월 15일</p>
				<p class="txt">서울특별시 종로구 종로 26 (서린동)</p>
				<p class="txt last">에스케이 주식회사 <strong>대표이사 장 동 현</strong></p>
			</div>
	
			<span class="popup_logo">
				<img src="http://222.236.61.86:81/resources/img/common/logo.png" alt="SK 주식회사">
			</span>
	
			<div class="close_wrap">
				<form method="post" name="pop_form" action=""> 
					<div class="fl"><input type="checkbox" name="chkbox" id="chkday"/><label for="chkday">오늘 하루 그만 보기</label></div>
					<div class="fr"><a href="javascript:popupClose();">닫기</a></div>
				</form>
			</div>
		</div>
	</div>

	<!-- 안내네비게이션 -->
	<p id="skip-navi-info">현재 사이트는 반응형 웹사이트입니다. 화면의 크기에 따라 표시되는(보여지는) 콘텐츠가 다를 수 있습니다. 화면을 최대화하여 사용해 주시기 바랍니다.</p>

	<!-- 스킵네비게이션 -->
	<ul id="skip-navi">
		<li><a href="#contents">본문 바로가기</a></li>
	</ul>

	<!-- wrap -->
	<div class="wrap">
		<div id="header">

			<div class="top_gnb">
				<a href="https://cc.sk.co.kr/" target="_blank" title="새 창 열림">SK주식회사 C&amp;C</a>
			</div>

			<!-- GNB 메뉴 -->
			<div class="h_group">
				<div>
					<h1 class="top_logo">
						<a href="/holdings/kr/main/main.html">SK holdings</a>
					</h1>
					<div id="gnb">												
						<a class="btn_menu" href="javascript:;" title="전체 메뉴 열기">
							<span></span>
							<span>전체 메뉴 열기</span>
							<span></span>
						</a>
						<div class="box">
							<a class="btn_close" href="javascript:;" title="전체 메뉴 닫기">
								<span></span>
								<span>전체 메뉴 닫기</span>
								<span></span>
							</a>
							<div class="gnb_m_top">
								<div class="top_logo_m">
									<a href="/holdings/kr/main/main.html">SK holdings</a>
								</div>
								<div class="btn_lang_m">
									<ul>
										<li><a href="/holdings/en/main/main.html" target="_blank" title="새 창 열림">ENG</a></li>
										<li class="on"><a href="/holdings/kr/main/main.html" target="_blank" title="새 창 열림">KOR</a></li>
									</ul>
								</div>
							</div>
							<ul class="gnb_m">
								<li>
									<p class="depth_1"><a href="javascript:;">회사소개</a></p>
									<div class="sub_menu">
										<div class="inner">
											<ul class="depth_2">
												<li><a href="/holdings/kr/about/overview.html">회사개요</a></li>
												<li><a href="/holdings/kr/about/ceo.html">CEO Message</a></li>
												<li><a href="/holdings/kr/about/strategy.html">사업소개</a></li>
												<!-- <li><a href="javascript:alert('준비중입니다');">행복경영</a></li> -->
											</ul>
										</div>
									</div>
								</li>
								<li>
									<p class="depth_1"><a href="javascript:;">투자정보</a></p>
									<div class="sub_menu">
										<div class="inner">
											<ul class="depth_2">
												<li>
													<a href="javascript:;">기업지배구조</a>
													<ul class="depth_3">
														<li><a href="/holdings/kr/ir/directors.html">이사회</a></li>
														<li><a href="/holdings/kr/ir/committees.html">이사회 내 위원회</a></li>
														<li><a href="/holdings/kr/ir/charter.html">지배구조헌장</a></li>
													</ul>
												</li>
												<li>
													<a href="javascript:;">재무정보</a>
													<ul class="depth_3">
														<li><a href="/holdings/kr/ir/shareholders.html">주주구성 </a></li>
														<li><a href="/holdings/kr/ir/balanceSheet2019.html">주요재무제표</a></li>
														<li><a href="/holdings/kr/ir/shareholdersReturn.html">주주환원</a></li>
													</ul>
												</li>
												<li>
													<a href="javascript:;">공시정보</a>
													<ul class="depth_3">
														<li><a href="/holdings/kr/ir/announcementList.html">전자공고</a></li>
														<li><a href="http://dart.fss.or.kr/html/search/SearchCompanyIR3_M.html?textCrpNM=034730" target="_blank" title="새창에서 열림">공시자료</a></li>
														<li><a href="/holdings/kr/ir/managementRegulations.html">공시정보관리규정</a></li>
													</ul>
												</li>
												<li>
													<a href="javascript:;">IR자료실</a>
													<ul class="depth_3">
														<li><a href="/holdings/kr/ir/presentation.html">Presentation</a></li>
														<li><a href="/holdings/kr/ir/businessReports.html">사업보고서</a></li>
														<li><a href="/holdings/kr/ir/auditReports.html">감사보고서</a></li>
													</ul>
												</li>
											</ul>
										</div>
									</div>
								</li>
								<li>
									<p class="depth_1"><a href="javascript:;">사회적가치</a></p>
									<div class="sub_menu">
										<div class="inner">
											<ul class="depth_2">
												<!-- <li><a href="javascript:alert('준비중입니다');">사회적가치제고활동</a></li> -->
												<li>
													<a href="javascript:;">지속가능경영</a>
													<ul class="depth_3">
														<li><a href="/holdings/kr/sv/sustainabilityStrategies.html">지속가능경영 전략</a></li>
														<li><a href="/holdings/kr/sv/sustainabilityReport.html">지속가능경영 보고서</a></li>
														<li><a href="/holdings/kr/sv/ethics.html">윤리규범</a></li>
													</ul>
												</li>
											</ul>
										</div>
									</div>
								</li>
								<li>
									<p class="depth_1"><a href="javascript:;">미디어센터</a></p>
									<div class="sub_menu">
										<div class="inner">
											<ul class="depth_2">
												<li><a href="/holdings/kr/media/PRCenterList.html">보도자료</a></li>
											</ul>
										</div>
									</div>
								</li>
							</ul>
							<div class="gnb_banner_wrap">
								<div class="gnb_banner">
									<a href="https://cc.sk.co.kr/" target="_blank" alt="새 창 열림">
										<p>SK주식회사 C&C<span>Digital Innovation Leading Company</span></p>
									</a>
								</div>
							</div>
						</div>
						<!-- // box -->
					</div>
					<!-- // gnb -->
					<div class="util_menu_pc">
						<div class="btn_lang">
							<ul>
								<li><a href="/holdings/en/main/main.html" target="_blank" title="새 창 열림">ENG</a></li>
								<li class="on"><a href="/holdings/kr/main/main.html" target="_blank" title="새 창 열림">KOR</a></li>
							</ul>
						</div>
						<div class="btn_sitemap">
							<div class="nav_area">
								<div class="navbar_toggle">
									<a href="javascript:;">전체 메뉴 열기
										<div class="menu_bar" title="전체 메뉴 열기">
											<div class="bar1"></div>
											<div class="bar2"></div>
											<div class="bar3"></div>
										</div>
									</a>
								</div>
								<div class="nav">
									<nav class="nav_hide">
										<!-- 사이트맵 -->
										<div class="sitemap_wrap">
											<div class="sitemap">
												<div class="sitemap_ul">
													<p>회사소개</p>
													<ul>
														<li><a href="/holdings/kr/about/overview.html">회사개요</a></li>
														<li><a href="/holdings/kr/about/ceo.html">CEO Message</a></li>
														<li><a href="/holdings/kr/about/strategy.html">사업소개</a></li>
														<!-- <li><a href="javascript:alert('준비중입니다');">행복경영</a></li> -->
													</ul>
												</div>
												<div class="sitemap_ul">
													<p>투자정보</p>
													<ul>
														<li>
															<a href="/holdings/kr/ir/charter.html">기업지배구조</a>
															<ul class="sitemap_depth_3">
																<li><a href="/holdings/kr/ir/directors.html">이사회</a></li>
																<li><a href="/holdings/kr/ir/committees.html">이사회 내 위원회</a></li>
																<li><a href="/holdings/kr/ir/charter.html">지배구조헌장</a></li>
															</ul>
														</li>
														<li>
															<a href="/holdings/kr/ir/shareholders.html">재무정보</a>
															<ul class="sitemap_depth_3">
																<li><a href="/holdings/kr/ir/shareholders.html">주주구성</a></li>
																<li><a href="/holdings/kr/ir/balanceSheet2019.html">주요재무제표</a></li>
																<li><a href="/holdings/kr/ir/shareholdersReturn.html">주주환원</a></li>
															</ul>
														</li>
														<li>
															<a href="/holdings/kr/ir/announcementList.html">공시정보</a>
															<ul class="sitemap_depth_3">
																<li><a href="/holdings/kr/ir/announcementList.html">전자공고</a></li>
																<li><a href="http://dart.fss.or.kr/html/search/SearchCompanyIR3_M.html?textCrpNM=034730" target="_blank" title="새 창 열림">공시자료</a></li>
																<li><a href="/holdings/kr/ir/managementRegulations.html">공시정보관리규정</a></li>
															</ul>
														</li>
														<li>
															<a href="/holdings/kr/ir/presentation.html">IR자료실</a>
															<ul class="sitemap_depth_3">
																<li><a href="/holdings/kr/ir/presentation.html">Presentation</a></li>
																<li><a href="/holdings/kr/ir/businessReports.html">사업보고서</a></li>
																<li><a href="/holdings/kr/ir/auditReports.html">감사보고서</a></li>
															</ul>
														</li>
													</ul>
												</div>
												<div class="sitemap_ul">
													<p>사회적가치</p>
													<ul>
														<!-- <li><a href="javascript:;">사회적가치제고활동</a></li> -->
														<li>
															<a href="javascript:">지속가능경영</a>
															<ul class="sitemap_depth_3">
																<li><a href="/holdings/kr/ir/sustainabilityStrategies.html">지속가능경영 전략</a></li>
																<li><a href="/holdings/kr/ir/sustainabilityReport.html">지속가능경영 보고서</a></li>
																<li><a href="/holdings/kr/sv/ethics.html">윤리규범</a></li>
															</ul>
														</li>

													</ul>
												</div>
												<div class="sitemap_ul">
													<p>미디어센터</p>
													<ul>
														<li><a href="/holdings/kr/media/PRCenterList.html">보도자료</a></li>
													</ul>
												</div>
											</div>
											<!-- // sitemap -->
										</div>
										<!-- // sitemap_wrap -->
									</nav>
								</div>
								<!-- // nav -->
							</div>
						</div>
					</div>
					<!-- // util_menu_pc -->
				</div>
			</div>
			<!-- // h_group -->

		</div>
		<!-- // header -->