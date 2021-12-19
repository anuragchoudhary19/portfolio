import React, { useRef, useEffect, useState } from 'react';
import styles from './Message.module.css';

const Message = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const sendMail = () => {
    fetch(
      `${process.env.REACT_APP_EMAIL_URL}?dest=${process.env.REACT_APP_EMAIL}&name=${name}&email=${email}&message=${message}`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }
    )
      .then((res) => {
        console.log(res);
        if (res.ok) {
          setSuccess(true);
          setName('');
          setEmail('');
          setMessage('');
        }
      })
      .catch((err) => {
        setFailure(true);
      });
  };
  const sayHello = useRef();
  useEffect(() => {
    const options = { root: null, threshold: 0.25, rootMargin: '-150px' };
    const observer = new IntersectionObserver(animateProjects, options);
    function animateProjects(entries, observer) {
      entries.forEach((entry) => {
        let heading = document.getElementById('hello-heading');
        if (entry.isIntersecting) {
          heading.style.opacity = '1';
          heading.style.visibility = 'visible';
          heading.style.transform = 'translateY(0)';
          heading.style.transitionDelay = '0ms';
          document.getElementById('input1').style.transform = 'translateY(0)';
          document.getElementById('input1').style.opacity = '1';
          document.getElementById('input1').style.visibility = 'visible';
          document.getElementById('input2').style.transform = 'translateY(0)';
          document.getElementById('input2').style.opacity = '1';
          document.getElementById('input2').style.visibility = 'visible';
          document.getElementById('input3').style.transform = 'translateY(0)';
          document.getElementById('input3').style.opacity = '1';
          document.getElementById('input3').style.visibility = 'visible';
          document.getElementById('submit').style.transform = 'translateY(0)';
          document.getElementById('submit').style.opacity = '1';
          document.getElementById('submit').style.visibility = 'visible';
        }
      });
    }
    if (sayHello.current) {
      observer.observe(sayHello.current);
    }
  }, []);

  return (
    <div className={styles.message} id='hello'>
      <div className={styles.section}>
        <h2 id='hello-heading'>Drop a message</h2>
        <div id='hello-content' ref={sayHello} className={styles.form}>
          <div className={styles.input1} id='input1'>
            <label>Name</label>
            <input type='text' name='name' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className={styles.input2} id='input2'>
            <label>Email</label>
            <input
              type='text'
              name='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.input2} id='input3'>
            <label>Message</label>
            <textarea
              name='message'
              value={message}
              placeholder='Message'
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          {success && <h3>Message was sent successfully</h3>}
          {failure && <h3>Message delivery failed</h3>}
          <button className={styles.submit} id='submit' onClick={() => sendMail()}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;
