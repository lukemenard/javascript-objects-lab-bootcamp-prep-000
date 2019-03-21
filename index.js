var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = { prop: 1 }
  return Object.assign({}, obj, {[key]:value})
}
updateObjectWithKeyAndValue(obj, 'prop2', 2)

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  var obj = { prop: 1 }
  object[key] = value
  return object
}
estructivelyUpdateObjectWithKeyAndValue(obj, 'prop2', 2)

function deleteFromObjectByKey(object, key) {
  var obj = { prop: 1 }
  var newObj = Object.assign({}, obj)
  delete newObj.key
  return newObj
}
deleteFromObjectByKey(object, key)