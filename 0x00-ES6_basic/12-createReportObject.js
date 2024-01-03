export default function createReportObject(employeesList) {

  return {
    allEmployees: {
      ...employeesList
    },
    getNumberOfDepartments: (employeesList) => {
      const my_set = new Set(Object.keys(employeesList));
      return my_set.size
    }
  }
}
