import { handleSubmit } from './js/formHandler'
import { checkForName } from './js/nameChecker'
import { getWeather} from './js/weather'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/_footer.scss'

export {
    checkForName,
    handleSubmit,
    getWeather
}