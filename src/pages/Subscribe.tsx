import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Logo } from "../components/Logo";
import { ReactIcon } from "../components/ReactIcon";
import { useCreateSubscriberMutation } from "../graphql/generated";
import ReactMockup from "/src/assets/code-mockup.png";

export function Subscribe() {
  const navigate = useNavigate()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const [createSubscriber, { loading }] = useCreateSubscriberMutation()

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();
    
    await createSubscriber({
      variables: {
        name,
        email
      }
    });

    navigate("/event");
  }

  function handleNameChange(value: string) {
    setName(value);
    if (value.length > 0) {
      setIsNameValid(true);
    }
  }

  function handleEmailChange(value: string) {
    setEmail(value);
    if (value.includes("@")) {
      setIsEmailValid(true);
    }
  }

  function handleInvalidName() {
    setIsNameValid(false);
  }

  function handleInvalidEmail() {
    setIsEmailValid(false);
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      
      <div className="absolute">
        <ReactIcon />
      </div>
      
      <div className="z-10 w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />

          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Build a <strong className="text-blue-500">complete Web Application</strong>, from scratch, using <strong className="text-blue-500">ReactJS</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            In just one week you can dominate by practicing one of the most used, high demanded technologies to access the best job opportunities in the market.
          </p>
        </div>

        <div className=" p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">Subscribe, it's free!</strong>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
            <input
              className={`bg-gray-900 rounded px-5 h-14 outline-none ${isNameValid ? "focus:outline-green-500" : "focus:outline-red-500"}`}
              type="text"
              placeholder="Full name"
              required
              onInvalid={handleInvalidName}
              onChange={event => handleNameChange(event.target.value)}
            />
            <input
              className={`bg-gray-900 rounded px-5 h-14 outline-none ${isEmailValid ? "focus:outline-green-500" : "focus:outline-red-500"}`}
              type="email"
              placeholder="E-mail"
              onInvalid={handleInvalidEmail}
              onChange={event => handleEmailChange(event.target.value)}
            />
            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              Guarantee my spot
            </button>
          </form>
        </div>
      </div>

      <img src={ReactMockup} className="mt-10" alt="mockup" />

      <Footer />
    </div>
  )
}