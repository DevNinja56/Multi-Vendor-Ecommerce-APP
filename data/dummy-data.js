import TodayModel from "../models/today_model";
import CategoryModel from "../models/category_model";
import FilterMakingModel from "../models/filter_making_model";
import FashionPredictionModel from "../models/fashion_prediction_model";
import Season from "../models/season";
import WinterModel from "../models/winter_model";
import ReviewModel from "../models/reviewmodel";
import NotificationModel from "../models/notification_model";
import CategoriesPageModel from "../models/categories_page_model";

export const CATEGORYDUMMY = [
  new CategoryModel("ca1", require("../assets/prediction1.png"), "Beauty"),
  new CategoryModel("ca2", require("../assets/prediction1.png"), "Jewellery"),
  new CategoryModel("ca3", require("../assets/prediction1.png"), "Kurta Sets"),
  new CategoryModel("ca4", require("../assets/prediction1.png"), "Sarees"),
  new CategoryModel("ca5", require("../assets/prediction1.png"), "Handbags"),
  new CategoryModel("ca6", require("../assets/prediction1.png"), "Kurtas"),
  new CategoryModel(
    "ca7",
    require("../assets/prediction1.png"),
    "Sports Shoes"
  ),
  new CategoryModel(
    "ca8",
    require("../assets/prediction1.png"),
    "Women's jackets"
  ),
  new CategoryModel("ca9", require("../assets/prediction1.png"), "Winter Wear"),
  new CategoryModel(
    "ca10",
    require("../assets/prediction1.png"),
    "Women's Trousers"
  ),
  new CategoryModel(
    "ca11",
    require("../assets/prediction1.png"),
    "Men's Flip-Flop"
  ),
  new CategoryModel("ca12", require("../assets/prediction1.png"), "Dresses"),
];

export const BEAUTYDUMMY = [
  new TodayModel("bu1", require("../assets/beautyDeals.png")),
  new TodayModel("bu2", require("../assets/beautyDeals.png")),
  new TodayModel("bu3", require("../assets/beautyDeals.png")),
  new TodayModel("bu4", require("../assets/beautyDeals.png")),
  new TodayModel("bu5", require("../assets/beautyDeals.png")),
];

export const DAILYEDITORDUMMY = [
  new TodayModel("to1", require("../assets/dailyeditor.png")),
  new TodayModel("to2", require("../assets/dailyeditor.png")),
  new TodayModel("to3", require("../assets/dailyeditor.png")),
  new TodayModel("to4", require("../assets/dailyeditor.png")),
  new TodayModel("to5", require("../assets/dailyeditor.png")),
];

export const IMAGESDETAILSDUMMY = [
  new TodayModel("imd1", require("../assets/sliderImages1.png")),
  new TodayModel("imd2", require("../assets/sliderImages2.png")),
  new TodayModel("imd3", require("../assets/sliderImages3.png")),
];

export const DAILYEDITORHIMDUMMY = [
  new TodayModel("to1", require("../assets/trendforhim.png")),
  new TodayModel("to2", require("../assets/trendforhim.png")),
  new TodayModel("to3", require("../assets/trendforhim.png")),
  new TodayModel("to4", require("../assets/trendforhim.png")),
  new TodayModel("to5", require("../assets/trendforhim.png")),
];

export const DAILYEDITORGRIDDUMMY = [
  new CategoryModel("cat1", require("../assets/dailyeditorg.png")),
  new CategoryModel("cat2", require("../assets/dailyeditorg.png")),
  new CategoryModel("cat3", require("../assets/dailyeditorg.png")),
  new CategoryModel("cat4", require("../assets/dailyeditorg.png")),
  new CategoryModel("cat5", require("../assets/dailyeditorg.png")),
  new CategoryModel("cat6", require("../assets/dailyeditorg.png")),
  new CategoryModel("cat7", require("../assets/dailyeditorg.png")),
  new CategoryModel("cat8", require("../assets/dailyeditorg.png")),
  new CategoryModel("cat9", require("../assets/dailyeditorg.png")),
  // new CategoryModel('58694a0f-3da1-471f-bd96-1455qw129d25', require('../assets/dailyeditorg.png'),),
  // new CategoryModel('58694a0f-3da1-471f-bd96-1455qw129d35', require('../assets/dailyeditorg.png'),),
  // new CategoryModel('58694a0f-3da1-471f-bd96-1455qw129d55', require('../assets/dailyeditorg.png'),),
];

export const SIZEDUMMY = [
  new FilterMakingModel("s1", "XL", false),
  new FilterMakingModel("s2", "L", false),
  new FilterMakingModel("s3", "M", false),
  new FilterMakingModel("s4", "S", false),
  new FilterMakingModel("s5", "XS", false),
  new FilterMakingModel("s6", "XXL", false),
];

export const COLORDUMMY = [
  new FilterMakingModel("c1", "Beigo", "#F4F9C6", false),
  new FilterMakingModel("c2", "Black", "#0F0F0F", false),
  new FilterMakingModel("c3", "Blue", "#0A6BAC", false),
  new FilterMakingModel("c4", "Brown", "#5D0701", false),
  new FilterMakingModel("c5", "Burgundy", "#9A061F", false),
  new FilterMakingModel("c6", "Charcoal", "#0C3E44", false),
  new FilterMakingModel("c7", "Coffee Brown", "#2A0202", false),
  new FilterMakingModel("c8", "Coral", "#F66630", false),
  new FilterMakingModel("c9", "Cream", "#FFFAB7", false),
  new FilterMakingModel("c10", "Pink", "#FF0C75", false),
  new FilterMakingModel("c11", "Yellow", "#FFE600", false),
  new FilterMakingModel("c12", "Purple", "#B503FF", false),
  new FilterMakingModel("c13", "Gray", "#9F9F9F", false),
];

export const BRANDDUMMY = [
  new FilterMakingModel("s1", "XL", false),
  new FilterMakingModel("s2", "L", false),
  new FilterMakingModel("s3", "M", false),
  new FilterMakingModel("s4", "S", false),
  new FilterMakingModel("s5", "XS", false),
  new FilterMakingModel("s6", "XXL", false),
];

export const INFLUENCERSDUMMY = [
  new TodayModel("info1", require("../assets/influencers.png")),
  new TodayModel("info2", require("../assets/influencers.png")),
  new TodayModel("info3", require("../assets/influencers.png")),
  new TodayModel("info4", require("../assets/influencers.png")),
  new TodayModel("info5", require("../assets/influencers.png")),
];

export const INFLUENCERPROFILEDUMMY = [
  new FashionPredictionModel(
    "inf1",
    require("../assets/sabooralipic.png"),
    "Saboor Ali"
  ),
  new FashionPredictionModel(
    "inf2",
    require("../assets/sabooralipic.png"),
    "Saboor Ali"
  ),
  new FashionPredictionModel(
    "inf3",
    require("../assets/sabooralipic.png"),
    "Saboor Ali"
  ),
];

export const FASHIONPREDICTIONDUMMY = [
  new FashionPredictionModel(
    "pr1",
    require("../assets/prediction1.png"),
    "Dec 22 - Jan 19",
    "Capricorn"
  ),
  new FashionPredictionModel(
    "pr2",
    require("../assets/prediction1.png"),
    "Jan 20 - Feb 18",
    "Aquarius"
  ),
  new FashionPredictionModel(
    "pr3",
    require("../assets/prediction1.png"),
    "Feb 19 - Mar 20",
    "Pisces"
  ),
  new FashionPredictionModel(
    "pr4",
    require("../assets/prediction1.png"),
    "Mar 21 - Apr 19",
    "Aries"
  ),
  new FashionPredictionModel(
    "pr5",
    require("../assets/prediction1.png"),
    "Apr 20 - May 20",
    "Taurus"
  ),
  new FashionPredictionModel(
    "pr6",
    require("../assets/prediction1.png"),
    "May 21 - Jun 20",
    "Gemini"
  ),
  new FashionPredictionModel(
    "pr7",
    require("../assets/prediction1.png"),
    "Jun 21 - Jul 22",
    "Cancer"
  ),
  new FashionPredictionModel(
    "pr8",
    require("../assets/prediction1.png"),
    "Jul 23 - Aug 22",
    "Leo"
  ),
  new FashionPredictionModel(
    "pr9",
    require("../assets/prediction1.png"),
    "Aug 23 - Sep 22",
    "Virgo"
  ),
  new FashionPredictionModel(
    "pr10",
    require("../assets/prediction1.png"),
    "Sep 23 - Oct 22",
    "Libra"
  ),
  new FashionPredictionModel(
    "pr11",
    require("../assets/prediction1.png"),
    "Oct 23 - Nov 21",
    "Scorpio"
  ),
  new FashionPredictionModel(
    "pr12",
    require("../assets/prediction1.png"),
    "Nov 20 - Dec 21",
    "Sagittarius"
  ),
];

export const SEASONCHECKLISTDUMMY = [
  new FashionPredictionModel(
    "sc1",
    require("../assets/prediction1.png"),
    "Starting At Rs, 599",
    "Bomber Jackets"
  ),
  new FashionPredictionModel(
    "sc2",
    require("../assets/prediction1.png"),
    "Starting At Rs, 599",
    "Bomber Jackets"
  ),
  new FashionPredictionModel(
    "sc3",
    require("../assets/prediction1.png"),
    "Starting At Rs, 599",
    "Bomber Jackets"
  ),
  new FashionPredictionModel(
    "sc4",
    require("../assets/prediction1.png"),
    "Starting At Rs, 599",
    "Bomber Jackets"
  ),
  new FashionPredictionModel(
    "sc5",
    require("../assets/prediction1.png"),
    "Starting At Rs, 599",
    "Bomber Jackets"
  ),
  new FashionPredictionModel(
    "sc6",
    require("../assets/prediction1.png"),
    "Starting At Rs, 599",
    "Bomber Jackets"
  ),
  new FashionPredictionModel(
    "sc7",
    require("../assets/prediction1.png"),
    "Starting At Rs, 599",
    "Bomber Jackets"
  ),
  new FashionPredictionModel(
    "sc8",
    require("../assets/prediction1.png"),
    "Starting At Rs, 599",
    "Bomber Jackets"
  ),
  new FashionPredictionModel(
    "sc9",
    require("../assets/prediction1.png"),
    "Starting At Rs, 599",
    "Bomber Jackets"
  ),
  new FashionPredictionModel(
    "sc10",
    require("../assets/prediction1.png"),
    "Starting At Rs, 599",
    "Bomber Jackets"
  ),
  new FashionPredictionModel(
    "sc11",
    require("../assets/prediction1.png"),
    "Starting At Rs, 599",
    "Bomber Jackets"
  ),
  new FashionPredictionModel(
    "pr12",
    require("../assets/prediction1.png"),
    "Starting At Rs, 599",
    "Bomber Jackets"
  ),
];

export const PRODUCTSDUMMY = [
  new CategoryModel("31"),
  new CategoryModel("12"),
  new CategoryModel("13"),
  new CategoryModel("14"),
  new CategoryModel("15"),
  new CategoryModel("16"),
  new CategoryModel("17"),
  new CategoryModel("18"),
  new CategoryModel("19"),
  new CategoryModel("10"),
  new CategoryModel("20"),
  new CategoryModel("21"),
];

export const SEASONDEMO = [
  new Season("se1", require("../assets/seasonimage.png")),
  new Season("se2", require("../assets/seasonimage.png")),
  new Season("se3", require("../assets/seasonimage.png")),
  new Season("se4", require("../assets/seasonimage.png")),
];

export const STYLECASDUMMY = [
  new TodayModel("st1", require("../assets/stylecast.png")),
  new TodayModel("st2", require("../assets/stylecast.png")),
  new TodayModel("st3", require("../assets/stylecast.png")),
  new TodayModel("st4", require("../assets/stylecast.png")),
  new TodayModel("st5", require("../assets/stylecast.png")),
];

export const TOPBRANDSDUMMY = [
  new CategoryModel("topb1", require("../assets/dealstopbrand.png")),
  new CategoryModel("topb2", require("../assets/dealstopbrand.png")),
  new CategoryModel("topb3", require("../assets/dealstopbrand.png")),
  new CategoryModel("topb4", require("../assets/dealstopbrand.png")),
  new CategoryModel("topb5", require("../assets/dealstopbrand.png")),
  new CategoryModel("topb6", require("../assets/dealstopbrand.png")),
  new CategoryModel("topb7", require("../assets/dealstopbrand.png")),
  new CategoryModel("topb8", require("../assets/dealstopbrand.png")),
  new CategoryModel("topb9", require("../assets/dealstopbrand.png")),
  new CategoryModel("topb10", require("../assets/dealstopbrand.png")),
  new CategoryModel("topb11", require("../assets/dealstopbrand.png")),
  new CategoryModel("topb12", require("../assets/dealstopbrand.png")),
];

export const WEADINGDUMMY = [
  new TodayModel("we1", require("../assets/wedding.png")),
  new TodayModel("we2", require("../assets/wedding.png")),
  new TodayModel("we3", require("../assets/wedding.png")),
  new TodayModel("we4", require("../assets/wedding.png")),
  new TodayModel("we5", require("../assets/wedding.png")),
];

export const WINTERDUMMY = [
  new WinterModel("win1", require("../assets/winterCollection1.png")),
  new WinterModel("win2", require("../assets/winterCollection1.png")),
  new WinterModel("win3", require("../assets/winterCollection1.png")),
  new WinterModel("win4", require("../assets/winterCollection1.png")),
  new WinterModel("win5", require("../assets/winterCollection1.png")),
];

export const TODAYDUMMY = [
  new TodayModel("tod1", require("../assets/todayDeals.png")),
  new TodayModel("tod2", require("../assets/todayDeals.png")),
  new TodayModel("tod3", require("../assets/todayDeals.png")),
  new TodayModel("tod4", require("../assets/todayDeals.png")),
  new TodayModel("tod5", require("../assets/todayDeals.png")),
];

export const NOTIFICATOINDUMMY = [
  new NotificationModel(
    "n1",
    "Order Arrived",
    "12:35 PM",
    "Order #58417 has been completed & arrived at the destination address.",
    "#FF2C5E",
    "truck"
  ),
  new NotificationModel(
    "n2",
    "Order Succes",
    "Yesterday",
    "Order #58417 has been completed & arrived at the destination address.",
    "#FB8004",
    "shopping-bag"
  ),
  new NotificationModel(
    "n3",
    "40% Discount",
    "25 Jun, 2025",
    "Order #58417 has been completed & arrived at the destination address.",
    "#04A48E",
    "tag"
  ),
  new NotificationModel(
    "n4",
    "Address Updated",
    "25 Jun, 2025",
    "Order #58417 has been completed & arrived at the destination address.",
    "#C903C9",
    "map-marker-alt"
  ),
];

export const REVIEWDUMMY = [new ReviewModel("r1"), new ReviewModel("r2")];

export const CATEGORIESPAGEDUMMY = [
  new CategoriesPageModel(
    "1",
    require("../assets/womenBackground.png"),
    "WOMEN",
    "Kurtas & Suits, Top & Tees,...",
    require("../assets/womenPic.png")
  ),
  new CategoriesPageModel(
    "2",
    require("../assets/menBackground.png"),
    "MEN",
    "Kurtas & Suits, Top & Tees,...",
    require("../assets/mensPic.png")
  ),
  new CategoriesPageModel(
    "3",
    require("../assets/kidsBackground.png"),
    "KIDS",
    "Kurtas & Suits, Top & Tees,...",
    require("../assets/kidsPic.png")
  ),
  new CategoriesPageModel(
    "4",
    require("../assets/hotDealsBackground.png"),
    "HOT DEALS",
    "Kurtas & Suits, Top & Tees,...",
    require("../assets/hotDealsPic.png")
  ),
];
