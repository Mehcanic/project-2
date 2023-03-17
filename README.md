
# GA SEI PROJECT 2 - Users API Project

This project is a simple website with news and users using Random User Generator API, Becon Ipsum Generator and Inshorts News API. It was created as a part of General Assembly Software Engineering Immersive course.

## Getting started and deployment

- This website can be available to view here [here](<https://heroic-licorice-b00822.netlify.app/>)
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
- Becon Ipsum Generator
- Inshorts News API

## Brief

- Consume a public API – this could be anything but it must make sense for your project.
- The app should include a router - with several "pages".
- Include wireframes - that you designed before building the app.
- Have semantically clean HTML - you make sure you write HTML that makes structural sense rather than thinking about how it might look, which is the job of CSS.
- Be deployed online and accessible to the public.

## Planning and Development procces

When I started to plan this project I didn't know what I wanted to build. My main goal was to focus on the React and visual aspect of the application. I wanted to use styled components but I let this go as I was struggling with understanding React on it's own and how to plan/structure React application. CSS also gave me some headache as understanding inheritance was a bit tricky.

I didn't whiteboard or wireframe this project because I knew that the style will be possibly the simplest part of the project. I have treated this project as a learning experience and I used it more as a sandbox to play around with React, APIs and styling React.

- First stage was to setup React application using Vite.
- Second stage was to create components for the application. There is a Likes component which was used to like specific news in home page. It only works on a visual side as a simple counter but is limited only to "liking" news once or removing the like back.

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

- Third stage was to create API calls and fetch data from the API.

```JS
    const getPersons = async () => {
      const response = await fetch(`https://randomuser.me/api/?nat=EU&results=100`)
      const data = await response.json()
      setPersons(data.results)
    }
```

- Fourth stage was to create a router for the application.

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

- Fifth stage was to style the application.

## Challenges

- This was my first project using React. There was many challanges along the way. One of the biggest was to decide what the project should be. As I didn't couldn't decide what to choose I used random APIs to play around with React.
- Second was to understand how to style React application using pure CSS.

## Wins

- I managed to create a simple application using React.
- I managed to create a router for the application.
- I managed to fetch data from the API and display it on the page.
- I managed to style the application using CSS and now I feel comfortable with styling React application.

## Future improvements

I would like to recreate this project using React and Material UI. I will use my own API for the data and I will create a proper structure for the application as this was the main goal of this project. To learn how to plan and structure React application.
