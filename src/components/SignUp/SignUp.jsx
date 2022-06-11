import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import "./SignUp.scss"

const SignUp = () => {

  const [username, setUsername] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [job, setJob] = useState("");
  const [experience, setExperience] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useNavigate();
  let navigate = useNavigate();
  const handleAction = (e) => {
    e.preventDefault()
    const authentication = getAuth();
    // if (id === 2) {
      
    // }
    createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate('/')
          console.log(response)
          localStorage.setItem('AuthToken', response._tokenResponse.refreshToken)
        })
  }
 

  return (
    <section>
      <div className="text-center">
        <main>
          <div class=""> 
            <form onSubmit={(e) => handleAction(e)} id="contact" action="" method="post">
              <h3 className='text-center'>Зарегистрирейтесь на нашем сайте.</h3>
              <h4>Заполните следующие поля для регистрации:</h4>
              <fieldset>
                <input placeholder="Введите вашу фамилю" type="text" tabindex="1" onChange={(e) => setUsername(e.target.value)} required autofocus/>
              </fieldset>
              <fieldset>
                <input placeholder="Введите ваше имя" type="text" tabindex="1" onChange={(e) => setSurname(e.target.value)} required autofocus/>
              </fieldset>
              <fieldset>
                <input placeholder="Введите ваш возраст" type="text" tabindex="1" onChange={(e) => setAge(e.target.value)} required autofocus/>
              </fieldset>
              <fieldset>
                <select id="profissao">
                  <option selected disable value="" type="profissao">Укажите нужную сферу?</option>
                  <option>Дизайнер</option>
                   <option>Архитектор</option>
                   <option>Клиент</option>
                   <option>Интерьер</option>
                </select>
              </fieldset>
              <fieldset>
                <input placeholder="Напишите свой e-mail" type="email" tabindex="2" onChange={(e) => setEmail(e.target.value)} required/>
              </fieldset>
              <fieldset>
                <input placeholder="Напишите надёжный пароль" type="password" tabindex="3" onChange={(e) => setPassword(e.target.value)} required/>
              </fieldset>
              <fieldset>
                <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Зарегистрироваться</button>
              </fieldset>
            </form>
          </div>
        </main>
      </div>
    </section>
  )
}

export default SignUp