<a name="readme-top"></a>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📗 Table of Contents](#-table-of-contents)
- [📖 Leaderboard](#-leaderboard)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [🚀 Live Demo ](#-live-demo-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Usage](#usage)
    - [Deployment](#deployment)
  - [👥 Authors ](#-authors-)
    - [Future Features ](#future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [:seedling: Credits ](#seedling-credits-)
  - [📝 License ](#-license-)

<!-- PROJECT DESCRIPTION -->

# 📖 <a name="about-project">Leaderboard</a>

The Leaderboard is a platform that allows users to view and add scores to a leaderboard. It provides a user-friendly interface for tracking and displaying recent scores, along with the option to add new scores.

The application uses API requests and local storage to store and synchronize the data.

The synchronization process ensures that the data remains intact even when there is no response from the server or when data retrieval is not possible. When new data is fetched from the server, it is updated in the local storage. Additionally, any new scores that were not sent yet, are sent to the server.

The application logic revolves around comparing the existing data stored in the local storage with the data fetched from the server to ensure consistency and accuracy.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

  <ul>
<li>HTML5</br>
<i>Markup language used for structuring the web page.</i></li>
<li>CSS3</br>
<i>Styling language used to enhance the visual appearance and layout of the application.</i></li>
<li>JavaScript (ES6)</br>
<i>Programming language used to add interactivity and dynamic functionality to the application.</i></li>
<li>Tailwind CSS</br>
<i>CSS framework used for rapid UI development with pre-defined utility classes.</i></li>
<li></br>
<i>PlayPager: Embedded chess game integrated into the application.</i></li>
<li></br>
<i>Git: Version control system for managing the project's source code.</i></li>
  </ul>

<!-- Features -->

### Key Features <a name="key-features"></a>

<ul>
  <li>
    Recent Scores: The application displays a list of recent scores on the leaderboard. Each score entry includes the player's name and their corresponding score.
  </li>
  <li>
    Refresh Button: Users can refresh the leaderboard to see the latest scores without reloading the entire page.
  </li>
  <li>
    Add Score Form: Users can add their own scores to the leaderboard by entering their name and the score achieved. The form validates the input and provides error messages if necessary.
  </li>
  <li>
    Game Integration: The application includes an embedded chess game where users can play chess directly on the page.
  </li>
  <li>
    Chess Rules: The application provides a section that explains the rules of chess, including piece movements, special moves, and game-ending conditions.
  </li>
  <li>
    Responsive Design: The user interface is designed to be responsive and compatible with various screen sizes and devices.
  </li>
</ul>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo" target="_blank"></a>

- [Online version of my project](https://romans-adi.github.io/leaderboard)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

Clone the project using a terminal on your local machine. After successful cloning you can open it in any text editor of your choice.
You can also run this project using CLI. Make sure you have node package manager installed on your machine, and then run 'npm start' to start this app in your default browser.

### Setup

Choose the directory on your local machine where you want to copy project. For example:

> cd /home/user/name-of-your-directory

Clone the project using one of the options.

Using SSH-key:

> git clone git@github.com:romans-adi/leaderboard.git

Using HTTPS:

> git clone https://github.com/romans-adi/leaderboard.git

You can also create the new directory just adding the name of it in the end of command. For example:

> git clone https://github.com/romans-adi/leaderboard.git leaderboard

### Usage

To run the project, execute the following command:

> npm start

### Deployment

This project was deployed using:

- [GitHub Pages](https://pages.github.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Romans S.**

- GitHub: [@romans-adi](https://github.com/romans-adi/)
- Twitter: [@obj583](https://twitter.com/obj583/)
- LinkedIn: [Romans Špiļaks](https://www.linkedin.com/in/obj513/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Future Features -->

### Future Features <a name="future-features"></a>

- **Add more styles**
- **Connect game to the scoreboard**
- **Rearrange project to MVC patters**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you would like to express your support, you can give this project a star. Your feedback is also greatly appreciated, so feel free to leave any comments you may have. Furthermore, if you would like to get in touch with me, you can find my contact information in the <a href="#authors">Authors</a> section.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to express my gratitude to Microverse, my coding school, for providing me with valuable resources and the opportunity to hone my skills in this field.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## :seedling: Credits <a name="credits"></a>

Game Creator: The chess game embedded in this application was created by PlayPager.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

