import React, { Component } from 'react';
import { Form, Col, Button, Container, Card } from 'react-bootstrap';
import { Redirect, Link } from 'react-router-dom';
import Axios from 'axios';
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from 'react-toasts';
import Image from './images/intro-img.png';
import './registrationForm.css';

export class UseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      city: '',
      country: '',
      dob: '',
      track: '',
      state: '',
      proficiency: '',
      gender: '',

      errors: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        city: '',
        country: '',
        dob: '',
        track: '',
        state: '',
        proficiency: '',
        gender: '',
      },
      validated: false,
      redirect: false,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.handleErrors(e);
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  handlePost = () => {
    const {
      firstName,
      lastName,
      email,
      dob,
      track,
      proficiency,
      city,
      state,
      country,
      gender,
      phoneNumber,
    } = this.state;

    Axios.post('https://vgg-interns-api.herokuapp.com/api/register', {
      firstName,
      lastName,
      email,
      dob,
      track,
      proficiency,
      city,
      state,
      country,
      gender,
      phoneNumber,
    })
      .then((res) => {
        ToastsStore.success(res.data.message);
        this.setState({
          ...this.state,
          redirect: true,
        });
      })
      .catch((err) => {
        const { message } = err.response.data;
        if (typeof message == 'object') {
          message.map((item) => ToastsStore.error(item.msg));
        } else {
          ToastsStore.error(message);
        }
      });
  };
  handleSubmit = (event) => {
    event.preventDefault();

    if (validateErrors(this.state.errors)) {
      this.handlePost();
      this.setState({
        validated: true,
        redirect: true,
      });
    } else {
      console.log('yes');
    }
  };

  handleErrors = (e) => {
    let errors = this.state.errors;

    const { name, value } = e.target;
    switch (name) {
      case 'firstName':
        errors.firstName = value.length <= 3 ? 'Too short' : '';
        break;
      case 'lastName':
        errors.lastName = value.length <= 3 ? 'Too short' : '';
        break;
      case 'email':
        errors.email = validEmailRegex.test(value) ? '' : 'Email is invalid';
        break;
      case 'phoneNumber':
        errors.phoneNumber =
          value.length <= 5 ? 'ahn ahn We want your full number now' : '';
        break;
      case 'city':
        errors.city = value.length <= 3 ? '' : '';
        break;
      case 'state':
        errors.state = value.length <= 3 ? '' : '';
        break;
      case 'country':
        errors.country = value.length <= 3 ? '' : '';
        break;
      default:
        break;
    }
    this.setState({
      errors,
    });
  };

  handleErrorsAfterSubmit = (e) => {
    const { name, value } = e.target;
    let errors = this.state.errors;

    switch (name) {
      case 'firstName':
        errors.firstName = console.log(value);
        break;
      case 'lastName':
        errors.lastName = value === '' ? 'Too short' : '';
        break;
      case 'email':
        errors.email = value === '' ? '' : 'Email is invalid';
        break;
      case 'phoneNumber':
        errors.phoneNumber =
          value === '' ? 'ahn ahn We want your full number now' : '';
        break;
      case 'dob':
        errors.dob = value === '' ? '' : '';
        break;
      case 'track':
        errors.track = value === '' ? '' : '';
        break;
      case 'proficiency':
        errors.proficiency = value === '' ? '' : '';
        break;
      case 'gender':
        errors.gender = value === '' ? '' : '';
        break;
      case 'city':
        errors.city = value === '' ? '' : '';
        break;
      case 'state':
        errors.state = value === '' ? '' : '';
        break;
      case 'country':
        errors.country = value === '' ? '' : '';
        break;
      default:
        break;
    }
    this.setState({
      errors,
      [name]: value,
    });
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      dob,
      track,
      proficiency,
      city,
      state,
      country,
      gender,
      phoneNumber,
      errors,
      redirect,
    } = this.state;

    const invalid =
      firstName === '' ||
      lastName === '' ||
      email === '' ||
      dob === '' ||
      track === '' ||
      proficiency === '' ||
      city === '' ||
      country === '' ||
      gender === '' ||
      phoneNumber === '' ||
      state === '';
    return (
      <div className='registration-form'>
        {renderRedirect(redirect)}
        <ToastsContainer
          position={ToastsContainerPosition.TOP_LEFT}
          store={ToastsStore}
        />
        <Container style={{ margin: '20px' }}>
          <Card
            style={{
              textAlign: 'center',
              marginBottom: '10px',
              marginTop: '3px',
            }}
          >
            <Card.Img
              variant='top'
              src={Image}
              /*check the background color to change the shade*/
              style={{
                backgroundColor: '#0B2B26',
                height: 'auto',
                width: '100%',
              }}
            />
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: 'center',
                  fontSize: '35px',
                  fontWeight: 'bold',
                  color: '#50b64a',
                }}
              >
                BECOME AN INTERN
              </Card.Title>
              <Card.Text>
                Not sure what track to choose? Take this
                <Link to='/take-a-survey'> survey.</Link>
              </Card.Text>
            </Card.Body>
          </Card>

          <Form
            noValidate
            validated={this.validated}
            onSubmit={this.handleSubmit}
            className='align-middle'
            style={{ color: 'white' }}
          >
            <Form.Row>
              <Form.Group as={Col} md='6' controlId='firstNameValidation'>
                <Form.Label>
                  First name
                  <span style={{ color: 'red' }}> *</span>
                </Form.Label>
                <Form.Control
                  required
                  type='text'
                  placeholder='First name'
                  name='firstName'
                  className={`form-control ${
                    errors.firstName.length > 0 && 'is-invalid'
                  }`}
                  value={firstName}
                  onChange={this.handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

                {errors.firstName.length > 0 && (
                  <div className='invalid-feedback'>{errors.firstName}</div>
                )}
              </Form.Group>
              <Form.Group as={Col} md='6' controlId='lastNameValidation'>
                <Form.Label>
                  Last name
                  <span style={{ color: 'red' }}> *</span>
                </Form.Label>
                <Form.Control
                  required
                  type='text'
                  placeholder='Last name'
                  name='lastName'
                  className={`form-control ${
                    errors.lastName.length > 0 && 'is-invalid'
                  }`}
                  value={lastName}
                  onChange={this.handleChange}
                />
                {errors.lastName.length > 0 && (
                  <div className='invalid-feedback text-right'>
                    {errors.lastName}
                  </div>
                )}
              </Form.Group>
              <Form.Group as={Col} md='6' controlId='emailValidation'>
                <Form.Label>
                  Email
                  <span style={{ color: 'red' }}> *</span>
                </Form.Label>
                <Form.Control
                  type='email'
                  name='email'
                  placeholder='john.doe@mail.com'
                  required
                  value={email}
                  className={`form-control ${
                    errors.email.length > 0 && 'is-invalid'
                  }`}
                  onChange={this.handleChange}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md='6' controlId='phoneValidation'>
                <Form.Label>
                  Phone Number
                  <span style={{ color: 'red' }}> *</span>
                </Form.Label>
                <Form.Control
                  type='tel'
                  name='phoneNumber'
                  placeholder='Phone Number'
                  required
                  className={`form-control ${
                    errors.phoneNumber.length > 0 && 'is-invalid'
                  }`}
                  value={phoneNumber}
                  onChange={this.handleChange}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.phoneNumber}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md='6' controlId='genderValidation'>
                <Form.Label>
                  Gender
                  <span style={{ color: 'red' }}> *</span>
                </Form.Label>
                <Form.Control
                  as='select'
                  name='gender'
                  required
                  className={`form-control ${
                    errors.gender.length > 0 && 'is-invalid'
                  }`}
                  value={gender}
                  onChange={this.handleChange}
                >
                  <option selected>Female</option>
                  <option>Male</option>
                  <option>Other</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} md='6' controlId='dateValidation'>
                <Form.Label>
                  Date of birth
                  <span style={{ color: 'red' }}> *</span>
                </Form.Label>
                <Form.Control
                  type='date'
                  name='dob'
                  placeholder='Date of birth'
                  required
                  className={`form-control ${
                    errors.dob.length > 0 && 'is-invalid'
                  }`}
                  value={dob}
                  onChange={this.handleChange}
                />
                <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md='6' controlId='trackValidation'>
                <Form.Label>
                  Track
                  <span style={{ color: 'red' }}> *</span>
                </Form.Label>
                <Form.Control
                  as='select'
                  name='track'
                  required
                  className={`form-control ${
                    errors.track.length > 0 && 'is-invalid'
                  }`}
                  value={track}
                  onChange={this.handleChange}
                >
                  <option></option>
                  <option>Frontend</option>
                  <option>Backend</option>
                  <option>DevOps</option>
                  <option>UI/UX designer</option>
                  <option>Software Quality Assurance</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} md='6' controlId='proficiencyValidation'>
                <Form.Label>
                  Proficiency
                  <span style={{ color: 'red' }}> *</span>
                </Form.Label>
                <Form.Control
                  as='select'
                  name='proficiency'
                  required
                  className={`form-control ${
                    errors.proficiency.length > 0 && 'is-invalid'
                  }`}
                  value={proficiency}
                  onChange={this.handleChange}
                >
                  <option>Beginner</option>
                  <option>Junior</option>
                  <option>Intermediate</option>
                  <option>Senior</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md='4' controlId='cityValidation'>
                <Form.Label>
                  City
                  <span style={{ color: 'red' }}> *</span>
                </Form.Label>
                <Form.Control
                  type='text'
                  placeholder='City'
                  required
                  name='city'
                  className={`form-control ${
                    errors.city.length > 0 && 'is-invalid'
                  }`}
                  value={city}
                  onChange={this.handleChange}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.city}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md='4' controlId='stateValidation'>
                <Form.Label>
                  State
                  <span style={{ color: 'red' }}> *</span>
                </Form.Label>
                <Form.Control
                  type='text'
                  placeholder='State'
                  required
                  name='state'
                  className={`form-control ${
                    errors.state.length > 0 && 'is-invalid'
                  }`}
                  value={state}
                  onChange={this.handleChange}
                />
                <Form.Control.Feedback type='invalid'>
                  Please provide a valid state.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md='4' controlId='countryValidation'>
                <Form.Label>
                  Country
                  <span style={{ color: 'red' }}> *</span>
                </Form.Label>
                <Form.Control
                  type='text'
                  name='country'
                  placeholder='Country'
                  required
                  className={`form-control ${
                    errors.country.length > 0 && 'is-invalid'
                  }`}
                  value={country}
                  onChange={this.handleChange}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.country}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Button
              type='submit'
              style={{
                padding: '5px',
                width: '100%',
                fontSize: '23px',
                pointerEvents: 'painted',
              }}
              disabled={invalid}
            >
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

const validEmailRegex = RegExp(
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
);

const renderRedirect = (redirect) => {
  if (redirect) {
    return <Redirect to='./' />;
  }
};

const validateErrors = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => {
    val.length > 0 && (valid = false);
  });
  return valid;
};

export default UseForm;
