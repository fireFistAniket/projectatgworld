import { useState } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { BiErrorCircle, BiSolidPencil } from "react-icons/bi";
import { IoPersonAddSharp } from "react-icons/io5";
import NavItem from "./components/NavItem";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Events from "./components/Events";

function App() {
  const [article, setArticle] = useState([
    {
      cover_img:
        "https://img.freepik.com/premium-photo/lake-green-mountain-with-nice-sky-blue-water-lake-into-mountains-hills-green-jungle_510654-332.jpg?w=900",
      title: "What if famous brands had regular fonts? Meet RegulaBrands!",
      tag: "✍️article",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,consequuntur sapiente! Adipisci iusto ducimus suscipit. Asperiores, maxime aspernatur ipsam voluptates magni recusandae corporis tempore quasi mollitia facilis odit, ipsa tempora?",
      profile_pic:
        "https://img.freepik.com/free-photo/portrait-young-indian-top-manager-t-shirt-tie-crossed-arms-smiling-white-isolated-wall_496169-1513.jpg?w=900&t=st=1691240698~exp=1691241298~hmac=fdccf556c462b0222c902483708a4ac016af5f559645df4f82ef41391dd15e38",
      name: "sarthak kamra",
    },
    {
      cover_img:
        "https://images.unsplash.com/photo-1559199496-490b6e15a0b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=875&q=80",
      title:
        "Tax Benefits for Investment under National Pension Scheme launched by Government",
      tag: "✍️education",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,consequuntur sapiente! Adipisci iusto ducimus suscipit. Asperiores, maxime aspernatur ipsam voluptates magni recusandae corporis tempore quasi mollitia facilis odit, ipsa tempora?",
      profile_pic:
        "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=900&t=st=1691248576~exp=1691249176~hmac=39118200954e310ec32295992d5f69ef163da183785ffbdada83f676cd38599c",
      name: "Sarah West",
    },
  ]);
  const [events, setEvents] = useState([
    {
      cover_img:
        "https://www.speednik.com/wp-content/blogs.dir/1/files/2022/04/dream-giveaway-wants-you-to-win-this-gorgeous-66-nova-2022-04-19_08-02-09_540802.jpg",
      title: "Finance & Investment Elite Social Mixer @Lujiazui",
      tag: "🗓️meetup",
      location: "Ahmedabad, India",
      date: "Fri, 12 Oct, 2018",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,consequuntur sapiente! Adipisci iusto ducimus suscipit. Asperiores, maxime aspernatur ipsam voluptates magni recusandae corporis tempore quasi mollitia facilis odit, ipsa tempora?",
      profile_pic:
        "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=900&t=st=1691258970~exp=1691259570~hmac=92c8ea2b3b33c0072b34460aa4377809ab0cad0c9f162df2f7a94041afa23d08",
      name: "Ronal Jones",
      btnData: "visit website",
    },
    {
      cover_img:
        "https://img.freepik.com/premium-vector/we-are-searching-recruitment-landing-page_23-2148620756.jpg?w=900",
      title: "Finance & Investment Elite Social Mixer @Lujiazui",
      tag: "💼job",
      location: "Noida, India",
      date: "Fri, 20 Oct, 2018",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,consequuntur sapiente! Adipisci iusto ducimus suscipit. Asperiores, maxime aspernatur ipsam voluptates magni recusandae corporis tempore quasi mollitia facilis odit, ipsa tempora?",
      profile_pic:
        "https://img.freepik.com/free-photo/smiley-businesswoman-posing-outdoors-with-arms-crossed-copy-space_23-2148767055.jpg?w=826&t=st=1691259129~exp=1691259729~hmac=03d9ad5d58991a7397ac2af95926b5a6fcfa4d7db973457994804fabccda0e4b",
      name: "Joseph Gray",
      btnData: "Apply on Timesjobs",
    },
  ]);
  return (
    <>
      <NavItem />
      <Header />
      <section>
        <div className="d-flex flex-column mx-2 mx-md-4 px-2 px-md-4 my-1 my-md-2 py-1 py-md-2 gap-4">
          <div className="container-fluid d-flex justify-content-between">
            <ul
              class="nav nav-underline d-none d-md-flex"
              id="myTab"
              role="tablist"
            >
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link text-secondary active text-capitalize"
                  id="allpost-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#allpost-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="allpost-tab-pane"
                  aria-selected="true"
                >
                  all posts(32)
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link text-secondary text-capitalize"
                  id="article-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#article-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="article-tab-pane"
                  aria-selected="false"
                >
                  article
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link text-secondary text-capitalize"
                  id="event-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#event-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="event-tab-pane"
                  aria-selected="false"
                >
                  event
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link text-secondary text-capitalize"
                  id="education-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#education-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="education-tab-pane"
                  aria-selected="false"
                >
                  education
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link text-secondary text-capitalize"
                  id="job-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#job-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="job-tab-pane"
                  aria-selected="false"
                >
                  job
                </button>
              </li>
            </ul>
            <div className="d-flex d-md-none justify-content-between w-100 align-items-center">
              <p className="text-capitalize fw-bold">post(325)</p>
              <select
                class="form-select w-25 fw-semibold"
                aria-label="Default select example"
              >
                <option selected>Filter:All</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="d-none d-md-flex gap-2">
              <div className="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle text-capitalize"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  write a post
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <button
                  type="button"
                  class="btn btn-primary d-flex align-items-center gap-1 text-capitalize"
                >
                  <IoPersonAddSharp />
                  join group
                </button>
              </div>
            </div>
          </div>
          <div className="d-flex">
            <div className="container-fluid flex-nowrap d-flex align-items-start justify-content-between gap-4">
              <div class="tab-content col-12 col-md-6" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="allpost-tab-pane"
                  role="tabpanel"
                  aria-labelledby="allpost-tab"
                  tabindex="0"
                >
                  {article.map((item, index) => (
                    <Cards key={index} data={item} />
                  ))}
                  {events.map((item, index) => (
                    <Events key={index} data={item} />
                  ))}
                </div>
                <div
                  class="tab-pane fade"
                  id="article-tab-pane"
                  role="tabpanel"
                  aria-labelledby="article-tab"
                  tabindex="0"
                >
                  {article.map((item, index) => (
                    <Cards key={index} data={item} />
                  ))}
                </div>
                <div
                  class="tab-pane fade"
                  id="event-tab-pane"
                  role="tabpanel"
                  aria-labelledby="event-tab"
                  tabindex="0"
                >
                  {article.map((item, index) => (
                    <Cards key={index} data={item} />
                  ))}
                </div>
                <div
                  class="tab-pane fade"
                  id="education-tab-pane"
                  role="tabpanel"
                  aria-labelledby="education-tab"
                  tabindex="0"
                >
                  {article.map((item, index) => (
                    <Cards key={index} data={item} />
                  ))}
                </div>
                <div
                  class="tab-pane fade"
                  id="job-tab-pane"
                  role="tabpanel"
                  aria-labelledby="job-tab"
                  tabindex="0"
                >
                  {article.map((item, index) => (
                    <Cards key={index} data={item} />
                  ))}
                </div>
              </div>
              <div className="d-none d-md-block">
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    <MdOutlineLocationOn />
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    value={"Noida,India"}
                    aria-describedby="basic-addon2"
                  />
                  <span class="input-group-text" id="basic-addon2">
                    <BiSolidPencil />
                  </span>
                </div>
                <div>
                  <p className="d-flex ">
                    <BiErrorCircle />
                    Your location will help us serve better and extend a
                    personalised experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
