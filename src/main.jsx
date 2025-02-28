import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// 1 lesson components + styles
import "./css/index.css"
import "modern-normalize"
import ProfileApp from './components/hw1/ProfileApp'
import { FriendsTask } from './components/hw1/FriendList'
import { TransactionApp } from './components/hw1/Transactions'


/// 2 lesson state + функции 
// import { BtnApp, ButtonTest } from './components/Lesson2'
import { QuizApp } from './components/lesson2practice/QuizApp'
// import { ToDoList } from './components/lesson2practice/ToDoList'
// 2 lesson homework
import { Feedback } from './components/hw2/Feedback'
import { ContactBook } from './components/hw2/ContactBook'

/// practice
// import { Article } from './components/practice/lesson1/Article'


createRoot(document.querySelector(".works")).render(
  <StrictMode>
    <h2>Homework 1</h2>
    <ProfileApp />
    <FriendsTask />
    <TransactionApp />
    <h2>-----------------------------</h2>
    {/* <BtnApp />
    <ButtonTest/> */}
    <QuizApp/>
    <h2>-----------------------------</h2>
    {/* <ToDoList/> */}
    <h2>Homework 2</h2>
    <Feedback/>
    <ContactBook/>
    <h2>-----------------------------</h2>
    <h2>Practice</h2>
    <h2>-----------------------------</h2>
    {/* <Article/> */}
  </StrictMode>
)