import React from "react"

const FormField = (field) => (
  <div>
    <input {...field.input} placeholder={field.placeholder} type={field.type}/>
    {field.meta.touched && field.meta.error &&
     <span className="form__field-error">{field.meta.error}</span>}
  </div>
)

export default FormField
