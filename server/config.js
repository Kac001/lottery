/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
  {
    type: 0,
    count: 1000,
    title: "",
    text: "特别奖"
  },
  {
    type: 1,
    count: 1,
    text: "特等奖",
    title: "",
    img: "../img/secrit.jpg"
  },
  {
    type: 2,
    count: 5,
    text: "一等奖",
    title: "",
    img: "../img/secrit.jpg"
  },
  {
    type: 3,
    count: 2,
    text: "二等奖",
    title: "",
    img: "../img/secrit.jpg"
  },
  {
    type: 4,
    count: 2,
    text: "三等奖",
    title: "",
    img: "../img/secrit.jpg"
  },
  {
    type: 5,
    count: 2,
    text: "四等奖",
    title: "",
    img: "../img/secrit.jpg"
  },
  {
    type: 6,
    count: 2,
    text: "五等奖",
    title: "",
    img: "../img/secrit.jpg"
  },
  {
    type: 7,
    count: 2,
    text: "六等奖",
    title: "",
    img: "../img/secrit.jpg"
  },
  {
    type: 8,
    count: 2,
    text: "七等奖",
    title: "",
    img: "../img/secrit.jpg"
  }
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [1, 1, 1, 1, 1, 2, 2, 2, 2];

/**
 * 卡片公司名称标识
 */
const COMPANY = "金鹏集团";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
