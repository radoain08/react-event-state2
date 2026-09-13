import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "./assets/logo-text.png";
import banner from "./assets/banner-stack.png";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [stack, setStack] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/technologies.json")
      .then((res) => res.json())
      .then((data) => setTechnologies(data))
      .finally(() => setLoading(false));
  }, []);

  const colors = {
    1: { backgroundColor: "#e0f2fe", color: "#0284c7" },
    2: { backgroundColor: "#dcfce7", color: "#16a34a" },
    3: { backgroundColor: "#ffedd5", color: "#ea580c" },
    4: { backgroundColor: "#f3f4f6", color: "#111827" },
    5: { backgroundColor: "#dcfce7", color: "#16a34a" },
    6: { backgroundColor: "#dbeafe", color: "#2563eb" },
    7: { backgroundColor: "#fee2e2", color: "#dc2626" },
    8: { backgroundColor: "#fef9c3", color: "#ca8a04" },
    9: { backgroundColor: "#dbeafe", color: "#2563eb" },
    10: { backgroundColor: "#dbeafe", color: "#2563eb" },
    11: { backgroundColor: "#cffafe", color: "#0891b2" },
    12: { backgroundColor: "#dbeafe", color: "#2563eb" },
  };

  const addToStack = (tech) => {
    if (stack.some((item) => item.id === tech.id)) {
      toast.warning(`${tech.name} is already in your stack.`);
      return;
    }

    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack.`);
  };

  const removeFromStack = (id) => {
    const tech = stack.find((item) => item.id === id);

    setStack(stack.filter((item) => item.id !== id));

    toast.info(`${tech.name} removed from your stack.`);
  };

  const removeAll = () => {
    setStack([]);
    toast.info("All technologies removed from your stack.");
  };

  return (
    <div>
      <ToastContainer position="top-right" autoClose={2000} />
      <nav className="sticky top-0 z-50 border-b border-gray-200/60 bg-white px-5 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl md:hidden"
          >
            ☰
          </button>

          <img src={logo} alt="Dev Stack" className="h-10 w-auto" />

          <div className="hidden gap-8 md:flex">
            <a href="#home">Home</a>
            <a href="#technologies">Technologies</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <button className="font-medium">Sign In</button>

            <button className="rounded-full gradient-bg px-5 py-2 font-medium text-white">
              Sign Up
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="mt-4 flex flex-col gap-4 border-t pt-4 md:hidden">
            <a href="#home">Home</a>
            <a href="#technologies">Technologies</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        )}
      </nav>

      <main id="home">
        <section className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-20 md:flex-row md:px-8 md:py-28">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Build Your Ideal
              <span className="block whitespace-nowrap gradient-text">
                Development Stack
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Explore frontend, backend, database, and tooling options,
              <br />
              compare them side by side, and put together the stack that fits
              your
              <br />
              next project.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
              <a
                href="#technologies"
                className="rounded-full gradient-bg px-7 py-3 font-semibold text-white"
              >
                Explore Technologies
              </a>

              <button className="rounded-full border border-gray-300 px-7 py-3 font-semibold">
                Learn More
              </button>
            </div>
          </div>

          <div className="flex flex-1 justify-center">
            <img
              src={banner}
              alt="Developer working"
              className="w-full max-w-md"
            />
          </div>
        </section>

        <section id="technologies" className="px-8 py-16">
          <div>
            <h2 className="text-3xl font-bold">
              Explore the <span className="text-pink-500">Technologies</span>
            </h2>

            <p className="mt-4 max-w-2xl text-gray-600">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-4">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
              {loading ? (
                <p className="col-span-full text-center text-gray-500">
                  Loading technologies...
                </p>
              ) : (
                technologies.map((tech) => (
                  <div
                    key={tech.id}
                    className="rounded-2xl border p-6 shadow-sm"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="h-10 w-10 object-contain"
                        />
                      </div>

                      {tech.badge && (
                        <span
                          className="rounded-full px-3 py-1 text-xs font-medium"
                          style={colors[tech.id]}
                        >
                          {tech.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="mt-4 text-xl font-bold">{tech.name}</h3>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {tech.description}
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="inline-block rounded-full border border-gray-300 px-3 py-1 text-xs font-medium text-gray-500">
                        {tech.category}
                      </span>

                      <span className="whitespace-nowrap text-sm text-gray-500">
                        {tech.difficulty}
                      </span>

                      <span className="whitespace-nowrap text-sm">
                        ⭐ {tech.rating}
                      </span>
                    </div>

                    <div className="mt-4">
                      <button
                        onClick={() => addToStack(tech)}
                        disabled={stack.some((item) => item.id === tech.id)}
                        className="w-full rounded-full gradient-bg px-4 py-2 text-sm font-medium text-white disabled:cursor-not-allowed disabled:bg-gray-300"
                      >
                        {stack.some((item) => item.id === tech.id)
                          ? "✓ Added to Stack"
                          : "Add to Stack"}
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div>
              <div className="rounded-2xl border p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">Your Stack</h3>
                </div>

                <p className="mt-2 text-gray-500">
                  {stack.length} technologies selected
                </p>

                {stack.length === 0 ? (
                  <div className="mt-6 text-center text-sm text-gray-500">
                    No technologies added yet.
                  </div>
                ) : (
                  <div className="mt-6 space-y-3">
                    {stack.map((tech) => (
                      <div
                        key={tech.id}
                        className="flex items-center justify-between rounded-xl border p-3"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={tech.logo}
                            alt={tech.name}
                            className="h-8 w-8 object-contain"
                          />

                          <div>
                            <p className="font-medium">{tech.name}</p>

                            <p className="inline-block rounded-full border border-gray-300 px-2 py-1 text-xs text-gray-500">
                              {tech.category}
                            </p>
                          </div>
                        </div>

                        <button
                          onClick={() => removeFromStack(tech.id)}
                          className="text-sm font-medium text-red-500"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                    {stack.length > 0 && (
                      <button
                        onClick={removeAll}
                        className="mt-6 w-full rounded-xl border px-4 py-3 text-sm font-medium text-red-500"
                      >
                        Remove All
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer
        id="contact"
        className="border-t border-gray-200 bg-gray-50 px-8 py-12"
      >
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
          <div>
            <img src={logo} alt="Dev Stack" className="h-10 w-auto" />
            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-600">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="mt-5 flex gap-4 text-sm text-gray-600">
              <a href="#">GitHub</a>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Product</h3>
            <div className="mt-4 space-y-3 text-sm text-gray-600">
              <a href="#" className="block">
                Home
              </a>
              <a href="#" className="block">
                Technologies
              </a>
              <a href="#" className="block">
                Projects
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Company</h3>
            <div className="mt-4 space-y-3 text-sm text-gray-600">
              <a href="#" className="block">
                About
              </a>
              <a href="#" className="block">
                Contact
              </a>
              <a href="#" className="block">
                Careers
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Legal</h3>
            <div className="mt-4 space-y-3 text-sm text-gray-600">
              <a href="#" className="block">
                Privacy Policy
              </a>
              <a href="#" className="block">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-3 border-t border-gray-200 pt-6 text-sm text-gray-500 md:flex-row">
          <p>© 2026 Dev Stack. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
