import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// 1 lesson components + styles
import "./css/index.css";
import "modern-normalize";
// import ProfileApp from "./components/hw1/ProfileApp";
// import { FriendsTask } from "./components/hw1/FriendList";
// import { TransactionApp } from "./components/hw1/Transactions";

/// 2 lesson state + функции
// import { BtnApp, ButtonTest } from './components/Lesson2'
// import { QuizApp } from "./components/lesson2practice/QuizApp";
// import { QuizAppHooks } from './components/lesson2practice/QuizAppHooks'
// import { ToDoList } from './components/lesson2practice/ToDoList'
// 2 lesson homework
// import { Feedback } from "./components/hw2/Feedback";
// import { ContactBook } from "./components/hw2/ContactBook";
// 3 lesson homework
// import { ImageGalleryApp } from './components/practice/homework3/ImageGalleryApp'

// lesson 4 practice
// import { RefExample } from './components/lesson4hooks/Refs';
// import { Meme } from './components/lesson4hooks/Meme'
// lesson 4 homework
// import { ImageHooksTask } from './components/hw4/practice/hw3/ImageHooksTask'
// import { GalleryApp } from "./components/hw4/practice/GalleryImage/GalleryApp";

/// practice
// import { Article } from './components/practice/lesson1/Article'
// import { Reader } from './components/practice/Reader/Reader'
// import publications from "./components/practice/Reader/publication.json";
// import { MaterialApp } from './components/practice/links/MaterialApp'

// createRoot(document.querySelector(".works")).render(
//   <StrictMode>
//     <h2>Homework 1</h2>
//     <ProfileApp />
//     <FriendsTask />
//     <TransactionApp />
//     <h2>-----------------------------</h2>
//     {/* <BtnApp />
//     <ButtonTest/> */}
//     <h2>Quizzes</h2>
//     {/* <QuizApp /> */}
//     <h2>-----------------------------</h2>
//     {/* <ToDoList/> */}
//     <h2>Homework 2</h2>
//     <Feedback />
//     <ContactBook />
//     <h2>-----------------------------</h2>
//     <h2>Practice</h2>
//     {/* <Meme/> */}
//     {/* <RefExample/> */}
//     {/* <Article/> */}
//     {/* <Reader items={publications}/> */}
//     {/* <MaterialApp/> */}
//     {/* <ImageGalleryApp/> */}
//     {/* <GalleryApp /> */}
//     {/* <ToDos/>   */}
//     <h2>-----------------------------</h2>
//     {/* <HooksProfile/> */}
//     {/* <StatisticsHooks/> */}
//   </StrictMode>
// );

///////////////////////////////////// Module 5+

import { BrowserRouter } from "react-router-dom";

// import { Practice5App } from "./components/lesson5practice/Lesson5App";
import { TestApp } from "./components/testMarsh/TestApp";
// import { MoviesTaskApp } from "./homework5/MoviesTaskApp";

//// 6 module - redux
import { Provider, useSelector } from "react-redux";
import { store } from "./redux/store";
import { Account } from "./components/lesson6Redux/Account";
// import { LangSwitcher } from "./components/lesson6Redux/LangSwitcher";
// import { practiceStore } from "./reduxPractice/practiceStore";
import { ContactBook } from "./components/hw2/ContactBook";
import { contactStore } from "./redux/homework6/contactStore";
import { ContactBook2 } from "./redux/homework6/ContactBook";

createRoot(document.querySelector(".worksPt2")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <Practice5App/>
      <h5>-----------</h5> */}
        <h2>Pages / lesson 5</h2>
        <TestApp />
        <h2>-----------------------------</h2>
        {/* <MoviesTaskApp/> */}
        <h2>Redux / lesson 6 </h2>
        {/* <ContactBook2/> */}
        <Account />
        {/* <LangSwitcher /> */}
        <h2>-----------------------------</h2>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
