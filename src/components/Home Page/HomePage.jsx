import "./HomePage.css";

const HomePage = ({colorMode}) => {
  return (
    <div className={colorMode? "main-container-dark-mode" : "main-container"}>
        <h1 className={colorMode? "main-topic-text-dark-mode" : "main-topic-text"}>Fun Facts About React</h1>
        <ul className="text-list">
            <li className={colorMode? "text-dark-mode" : "text"}>Was first released in 2013</li>
            <li className={colorMode? "text-dark-mode" : "text"}>Was originally created by Jordan Walke</li>
            <li className={colorMode? "text-dark-mode" : "text"}>Has well over 100k stars on GitHub</li>
            <li className={colorMode? "text-dark-mode" : "text"}>Is maintained by Facebook</li>
            <li className={colorMode? "text-dark-mode" : "text"}>Powers thousands of enterprise apps including mobile apps</li>
        </ul>
    </div>
  )
}

export default HomePage