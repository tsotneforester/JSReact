import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useLocalHook from '../useLocalHook';
import { updateEmploeesData } from '../utils/helperFunctions';

export default function NewEmployee() {
  const { storedData } = useLocalHook();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    updateEmploeesData(storedData, data);
    reset();
    navigate('/');
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label> Name:</label>
          <S.Input
            {...register('name', {
              required: 'Name is required',
              pattern: {
                value: /^[\p{L}\s]+$/u,
                message: 'must contain only unicode letters',
              },
            })}
            $error={errors.name}
            placeholder="Tsotne Meladze"
          />
          {errors.name && <span>{errors.name.message}</span>}
        </fieldset>

        <fieldset>
          <label> Department:</label>
          <S.Input
            {...register('department', {
              required: 'Department is required',
              pattern: {
                value: /^[\p{L}\s]+$/u,
                message: 'must contain only unicode letters',
              },
            })}
            $error={errors.department}
            placeholder="AML"
          />
          {errors.department && <span>{errors.department.message}</span>}
        </fieldset>
        <fieldset>
          <label> Role:</label>
          <S.Input
            {...register('role', {
              required: 'Role is required',
              pattern: {
                value: /^[\p{L}\s]+$/u,
                message: 'must contain only unicode letters',
              },
            })}
            $error={errors.role}
            placeholder="Specialist"
          />
          {errors.role && <span>{errors.role.message}</span>}
        </fieldset>

        <button type="submit">Submit</button>
      </S.Form>
    </S.Container>
  );
}

const S = {};
S.Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`;

S.Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;

  width: 100%;
  max-width: 420px;
  padding: 0 24px 40px 24px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;

  fieldset {
    border: none;
    width: 100%;
    gap: 8px;
    display: grid;
    grid-template-areas:
      'label error'
      'input input';
  }

  label {
    grid-area: label;
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
    color: ${({ theme }) => theme.colors.blue};
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
  }

  span {
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
    color: ${({ theme }) => theme.colors.tomato};
    grid-area: error;
    justify-self: flex-end;
  }

  p {
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
    color: ${({ theme }) => theme.colors.tomato};
    grid-area: error;
    justify-self: flex-end;
  }

  button {
    width: auto;
    height: auto;
    width: 100%;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.blue};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 700;
    text-align: center;
    line-height: 24px;
    padding: 10px 18px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    transition: all 0.8s;
    &:focus,
    &:hover {
      background-color: ${({ theme }) => theme.colors.tomato};
    }
  }
`;

S.Input = styled.input`
  grid-area: input;
  padding: 8px 12px;
  width: 100%;
  max-width: none;
  border: 1px solid
    ${({ $error, theme }) => ($error ? theme.colors.tomato : theme.colors.blue)};

  border-radius: 8px;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.blue};
  background-color: ${({ $error, theme }) =>
    $error ? theme.colors.darkTomato : 'transparent'};
  &:active,
  &:focus {
    border-color: ${({ $error, theme }) => ($error ? null : theme.colors.blue)};
  }

  &::placeholder {
    opacity: 0.5;
  }
`;
