import "./index.css";
import FormValidator from "../components/FormValidator.js";
import { feedbackButton, formData } from "../utils/constants.js";
import PopupWithForm from "../components/PopupWithForm.js";

// Объект с набором форм и аттрибутом name;
const formValidator = {};

// Включение валидации
const enableFormValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    const formName = formElement.getAttribute("name");
    formValidator[formName] = validator;
    validator.enableValidation();
  });
};

enableFormValidation(formData);

// Попап формы редактирования профиля
const formFeedback = new PopupWithForm({
  popupSelector: ".popup_handle_feedback",
  submitForm: (formValues) => {
    // api.editUserInfo(formValues)
    //   .then((userData) => {
    //     userInfo.setUserInfo(userData);
    console.log(formValues);
    formFeedback.close();
    //   })
    //   .catch((err) => {
    //     console.log(`${err}`);
    //   })
    //   .finally(()=>{
    //     formFeedback.renderLoading(false);
    //   });
  },
});

formFeedback.setEventListeners();

function openPopupFeedbackForm() {
  //Деативация кнопки сабмита
  formValidator["feedbackform"].resetValidation();
  formFeedback.open();
}

// Добавить слушатели кнопкам открытия попапов редактирования профиля и добавления карточки
feedbackButton.addEventListener("click", () => {
  openPopupFeedbackForm();
});
