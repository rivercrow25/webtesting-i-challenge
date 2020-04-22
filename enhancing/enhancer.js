module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement < 20) {
    item.enhancement = item.enhancement + 1
    return { ...item }
  } else {
    return { ...item }
  }
}

function fail(item) {
  if (item.enhancement < 15) {
    item.durability = item.durability - 5
    return { ...item }
  } else if (item.enhancement >= 15) {
    item.durability = item.durability - 10
    if (item.enhancement > 15) {
      item.enhancement = item.enhancement - 1
      return { ...item }
    } else {
      return { ...item }
    }
  }
}

function repair(item) {
  item.durability = 100
  return { ...item };
}

function get(item) {
  if (item.enhancement === 0) {
    return { ...item }
  } else {
    item.name = `[+${item.enhancement}]${item.name}`
    return { ...item }
  }
}
