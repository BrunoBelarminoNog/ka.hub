import React, { useState } from "react";
import { Container, InputContainer } from "./styles";

const Input = ({ label, icon: Icon, register, name, id, error, ...rest }) => {
  const [onFocus, setOnFocus] = useState(false);

  return (
    <Container>
      <label htmlFor={name}>
        {" "}
        {label} {!!error && <span> - {error}</span>}
      </label>
      <InputContainer focus={onFocus} isErrored={!!error}>
        {Icon && <Icon size={24} />}
        {id === "bio" ? (
          <textarea
            {...register(name)}
            {...rest}
            onFocus={() => setOnFocus(true)}
            onBlur={() => setOnFocus(false)}
          />
        ) : 
        id === "course_module" ? (
          <select
            {...register(name)}
            {...rest}
            onFocus={() => setOnFocus(true)}
            onBlur={() => setOnFocus(false)}
          > 
            <option value="Módulo 1 - Front-End Básico">Módulo 1 - Front-End Básico</option>
            <option value="Módulo 2 - Front-End Avançado">Módulo 2 - Front-End Avançado</option>
            <option value="Módulo 3 - Back-End Básico">Módulo 3 - Back-End Básico</option>
            <option value="Módulo 4 - Back-End Avançado">Módulo 4 - Back-End Avançado</option>
          </select>
        )
          :
        (
          <input
            {...register(name)}
            {...rest}
            onFocus={() => setOnFocus(true)}
            onBlur={() => setOnFocus(false)}
          />
        )}
      </InputContainer>
    </Container>
  );
};

export default Input;
