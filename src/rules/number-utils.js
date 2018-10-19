import * as _ from 'lodash'
export default {
  isNumberInRange (value, scope) {  // scope is : 1,(0,1000),[-1,1000],[0,100),(0,100],value is number
    if (!value) {
      return true
    }
    if (!this.isNumber(value)) {
      // throw new Error("value is not number");
      return false
    }
    if (!scope) {
      return true
    }
    value = parseInt(value)
    if (/^(-|\+)?\d+(\.\d+)?$/.test(scope) === true) {
      return scope === value
    } else if (/^([（([][\s]*[-]?[\d]*[\s]*[,，][\s]*[-]?[\d]*[\s]*[）)\]])$/.test(scope) === true) {
      let isMoreThanEquals = scope.substring(0, 1) === '['
      let isLessThanEquals = scope.substring(scope.length - 1, scope.length) === ']'
      scope = _.replace(scope, /([(（)）[\]\s])/g, '')
      let values = _.split(scope, /[,，]/)
      let startNumber = parseInt(values[0])
      let endNumber = parseInt(values[1])
      let isIn = true
      if (!isNaN(startNumber)) {
        isIn = isIn && (isMoreThanEquals ? value >= startNumber : value > startNumber)
      }
      if (!isNaN(endNumber)) {
        isIn = isIn && (isLessThanEquals ? value <= endNumber : value < endNumber)
      }
      return isIn
    } else {
      // throw new Error('The format of scope is incorrect');
      return false
    }
  },
  isNumber (value) {
    return /^(-|\+)?\d+(\.\d+)?$/.test(value)
  }
}
