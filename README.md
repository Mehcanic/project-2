
# GA SEI PROJECT 2 - Users API Project

This project is a simple website with news and users using Random User Generator API, Bacon Ipsum Generator and Inshorts News API. It was created as a part of the General Assembly Software Engineering Immersive course.

## Getting started and deployment

- This website can be available to view [here](<https://heroic-licorice-b00822.netlify.app/>)
- If you would like to take a look at the code please clone it and run:

```console
npm install
```

## Goal and timeframe

The time frame for the project was less than 2 weeks. It was a solo project.

## Technologies used

- HTML
- CSS
- React with Vite written using JavaScript
- GitHub
- Netlify
- Random User Generator API
- Bacon Ipsum Generator
- Inshorts News API

## Brief

- Consume a public API – this could be anything but it must make sense for your project.
- The app should include a router - with several "pages".
- Include wireframes - that you designed before building the app.
- Have semantically clean HTML - you make sure you write HTML that makes structural sense rather than thinking about how it might look, which is the job of CSS.
- Be deployed online and accessible to the public.

## Planning and Development procces

My main goal was to focus on React and the visual aspects of the application. I wanted to use styled-components but I decided to focus on understanding React on its own and how to plan/structure React applications. Styling the app with CSS was also a good learning experience as understanding inheritance was a bit tricky.

I didn't whiteboard or wireframe this project because I knew that the style will be possibly the simplest part of the project. I have treated this project as a learning experience and I used it more as a sandbox to play around with React, APIs and styling React.

1. The first stage was to set up a React application using Vite:

    - Created a new React application using:

      ```console
      npm create vite@latest .
      ```

    - Set up a basic file structure for the application

    - First stage was to setup React application using Vite. I used the following command:

2. The second stage was to create components for the application.

    There is a Likes component which was used to like specific news on the home page. It only works on a visual side as a simple counter but is limited only to "liking" news once or removing the like back:

      - I have created a reusable Likes button component to use across the app.
      - I have used React Hooks to manage component state
      - Used JSX to render components and data

    ```JS
    const Likes = () => {
      const [counter, setCounter] = React.useState(0)
      const [didLikeComment, setDidLikeComment] = React.useState(false)

        const increaseLike = () => {
          if (!didLikeComment) {
            setDidLikeComment(true)
            setCounter(counter + 1)
          }
        }
      
      const decreaseLike = () => {
        if (didLikeComment) {
          setDidLikeComment(false)
          setCounter(counter - 1)
        }
      }
      
      return (
        <div className="likes-button">
          <button onClick={decreaseLike}>-</button>
          <p>{counter}</p>
          <button onClick={increaseLike}>+</button>
        </div>
      )
    }

    export default Likes
    ```

3. The third stage was to create API calls and fetch data from the API:

    - I used the fetch() function to make HTTP requests to the API endpoints to get the data
    - Used async/await to manage asynchronous operations and handle API responses
    - Extracted the response data using the JSON() method and assigned it to a variable
    - Stored the relevant data in the component state or passed it down to child components as props

    ```JS
        const getPersons = async () => {
          const response = await fetch(`https://randomuser.me/api/?nat=EU&results=100`)
          const data = await response.json()
          setPersons(data.results)
        }
    ```

4. The fourth stage was to create a router for the application:

    - Used React Router to implement client-side routing
    - Defined routes for each page of the website
    - Used the Link tag component to enable navigation between routes

    ```JS
    function App() {
      return (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/allusers' element={<AllUsers />} />
            <Route path='/userprofile' element={<UserProfile />} />
          </Routes>
        </BrowserRouter>
      )
    }


    const Navbar = () => {
      return (
        <>
        <header>
          <nav>
            <Link to="/" className="navbar-item">Home</Link>
            <Link to="allusers" className="navbar-item">All Users</Link>
            <Link to="userprofile" className="navbar-item">User Profile</Link>
          </nav>
        </header>
        </>
      )
    }
    ```

5. The fifth stage was to style the application:

    - Used CSS to style components and the layout of the application
    - Created UtilityCalsses.css to keep most reusable code as reusable classes
    - Created App.css to keep CSS variables in the global scope to reuse wherever needed
    - Styled each component individually to keep CSS simple

## Challenges

- This was my first project using React. There were many challenges along the way. One of the biggest was to decide what the project should be, as I couldn't decide what to choose, I used random APIs to play around with React.
- The second was to understand how to style React applications using pure CSS. React applications often have dynamic content, which can be challenging to style using pure CSS. Also, understanding inheritance for CSS was challenging.

## Wins

I successfully developed a React application with a router and integrated data fetching from an API. Additionally, I refined my CSS skills and am now confident in styling React applications.

## Future improvements

I would like to recreate this project using React and Material UI. I will use my own API for the data and I will create a proper structure for the application as this was the main goal of this project, to learn how to plan and structure React applications.

## Key learnings

Making my first static JS browser game from scratch was a great learning exercise and a fun way to consolidate my learnings. In particular, I learnt a lot about DOM manipulation, different use cases for different JS array methods, and working with timers.
