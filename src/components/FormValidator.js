export default class FormValidator {
  constructor(data, form) {
    this._inputSelector = data.inputSelector;
    this._checkboxSelector = data.checkboxSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._form = form;
    this._inputList = this._form.querySelectorAll(this._inputSelector);
    this._checkboxList = this._form.querySelectorAll(this._checkboxSelector);
    this._submitButton = this._form.querySelector(this._submitButtonSelector);
    this._formSubmitText = document.querySelector('.form__submit-text');
  }

  enableValidation() {
    this._checkButtonValidity();
    this._inputList.forEach(input => {
      input.addEventListener('input', (input)=> {
        this._checkInputValidity(input.target);
        this._checkButtonValidity();
      });
    })
    this._checkboxList.forEach(checkbox => {
      checkbox.addEventListener('change', (checkbox)=> {
        this._checkInputValidity(checkbox.target);
        this._checkButtonValidity();
      });
    })
  }

  resetValidation() {
    this._checkButtonValidity();
    this._inputList.forEach((input) => {
      const errorMessage = this._form.querySelector(`#error-${input.id}`);
      this._setInputValid(errorMessage, input);
    });
  }

  _checkButtonValidity() {
    if(this._form.checkValidity()){
      this._submitButton.classList.remove(this._inactiveButtonClass);
      this._submitButton.removeAttribute('disabled');
      this._form && this._formSubmitText.classList.add('form__submit-text_hover');
    } else {
      this._submitButton.classList.add(this._inactiveButtonClass);
      this._form && this._formSubmitText.classList.remove('form__submit-text_hover');
      this._submitButton.setAttribute('disabled','');
    }
  }

  _checkInputValidity(input) {
    const errorMessage = this._form.querySelector(`#error-${input.id}`);
    if(input.validity.valid || input.checked){
   this._setInputValid(errorMessage, input);
    } else {
   this._setInputInvalid(errorMessage, input);
    }
  }

  _setInputValid(errorMessage, input) {
    input.classList.remove(this._inputErrorClass);
    errorMessage.textContent = '';
  }

  _setInputInvalid = (errorMessage, input) => {
    input.classList.add(this._inputErrorClass);
    errorMessage.textContent = input.validationMessage;
  }
}
