export const getShortName = (name = "") => {
  return name.length > 8 ? `${name.slice(0, 8)}...` : name
}
