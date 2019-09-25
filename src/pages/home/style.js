import styled from 'styled-components'

export const HomeWrap = styled.div`
  overflow: hidden;
	width: 960px;
	margin: 0 auto;
	padding-top: 56px;
`
export const HomeLeft = styled.div`
	float: left;
	margin-left: 15px;
	padding-top: 30px;
	width: 625px;
	.banner-img {
		width: 625px;
		height: 270px;
	}
`
export const HomeRight = styled.div`
	width: 280px;
	float: right;
`
export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px;
	padding-left: 5px;
  border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
	float: left;
	height: 32px;
	line-height: 32px;
	margin-left: 18px;
	margin-bottom: 18px;
  padding-right: 10px;
  background: #f7f7f7;
	font-size: 14px;
	color: #000;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	.topic-pic {
		display: block;
		float: left;
		width: 32px;
		height: 32px;
		margin-right: 10px;
	}
`

export const ListItem = styled.div`
  border-bottom: 1px solid #dcdcdc;
	overflow: hidden;
	padding: 20px 0;
	.pic {
		display: block;
		width: 125px;
		height: 100px;
		float: right;
	}
`
export const ListInfo = styled.div`
  width: 500px;
	float: left;
	.title {
		line-height: 27px;
		font-size: 18px;
		font-weight: bold;
		color: #333;
	}
	.desc {
		line-height: 24px;
		font-size: 13px;
		color: #999;
	}
`

export const LoadMore = styled.div`
  width: 100%;
	height: 40px;
	background: #a5a5a5;
	text-align: center;
	line-height: 40px;
	color: #fff;
	cursor: pointer;
	margin: 30px 0;
	border-radius: 20px;
`

export const BackTop = styled.div`
  position: fixed;
	right: 10px;
	bottom: 10px;
	width: 60px;
	height: 60px;
	line-height: 60px;
	text-align: center;
	border: 1px solid #ccc;
	font-size: 14px;
	border-radius: 50%;
	cursor: pointer;
`
export const RecommentWrap = styled.div`
  width: 280px;
	margin: 30px 0;
`
export const RecommentItem = styled.div`
  width: 280px;
	height: 50px;
	background-image: url(${(props) => props.imgUrl});
	background-size: contain;
`

export const WriterWrapper = styled.div`
	width: 278px;
	border: 1px solid #dcdcdc;
	border-radius: 3px;
	height: 720px;
	line-height: 300px;
	text-align: center;
	background-image: url(${(props) => props.imgUrl});
	background-size: contain;
`;