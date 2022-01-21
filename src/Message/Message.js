import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import styles from './Message.module.css';

const Message = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  useEffect(() => {
    let messageElement = document.getElementById('contact');
    const options = { root: null, threshold: 0.25, rootMargin: '-150px 0px -150px 0px' };
    const observer = new IntersectionObserver(animateProjects, options);
    function animateProjects(entries, observer) {
      entries.forEach((entry) => {
        let heading = document.getElementById('message-heading');
        let form = document.getElementById('message-form');
        if (entry.isIntersecting) {
          heading.style.opacity = '1';
          heading.style.transform = 'translateY(0)';
          let delay = 100;
          let childElements = form.children;
          for (let i = 0; i < childElements.length; i++) {
            console.log(childElements[i].tagName);
            childElements[i].style.transform = 'translateY(0)';
            childElements[i].style.opacity = '1';
            childElements[i].style.transitionDelay = delay + 'ms';
            delay = delay + 50;
          }
        }
      });
    }

    observer.observe(messageElement);
  }, []);
  const handleName = (e) => {
    setError('');
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setError('');
    setEmail(e.target.value.toLowerCase());
  };
  const handleMessage = (e) => {
    setError('');
    setMessage(e.target.value);
  };
  const sendMail = async () => {
    if (!name || name.trim() === '') {
      setError('Name is required');
      return;
    }
    if (!email || email.trim() === '') {
      setError('Email is required');
      return;
    } else if (
      !email.match(
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
      )
    ) {
      setError('Valid Email is required');
      return;
    }
    if (!message) {
      setError('Message is required');
      return;
    }
    setLoading(true);
    await fetch(
      `${process.env.REACT_APP_EMAIL_URL}?dest=${process.env.REACT_APP_EMAIL}&name=${name}&email=${email}&message=${message}`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }
    )
      .then((res) => {
        if (res.ok) {
          setLoading(false);
          setSuccess(true);
          setName('');
          setEmail('');
          setMessage('');
        }
      })
      .catch((err) => {
        setLoading(false);
        setFailure(true);
      });
  };

  return (
    <div className={styles.message} id='contact'>
      <div className={styles.section}>
        <h2 className={styles.heading} id='message-heading'>
          Get in touch
        </h2>
        <div id='message-form' className={styles.form}>
          <div>
            <label>Name</label>
            <input type='text' name='name' placeholder='Name' value={name} onChange={handleName} required />
          </div>
          <div>
            <label>Email</label>
            <input type='email' name='email' placeholder='Email' value={email} onChange={handleEmail} required />
          </div>
          <div>
            <label>Message</label>
            <textarea name='message' value={message} placeholder='Message' onChange={handleMessage} required />
          </div>
          {error && <h4 style={{ color: 'red' }}>{error}</h4>}
          {success && <h4>Message was sent successfully</h4>}
          {failure && <h4>Message delivery failed</h4>}
          <div className={styles.btn}>
            <button className={styles.submit} id='submit' onClick={() => sendMail()}>
              {loading ? <FontAwesomeIcon icon={faSpinner} spin size='2x' /> : 'SUBMIT'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
