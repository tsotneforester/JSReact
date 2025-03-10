import { useState } from 'react';
import styled from 'styled-components';
import useLocalHook from '../useLocalHook';
import SortSVG from '../assets/sort.svg?react';

export default function Home() {
  const { storedData, setStoredData } = useLocalHook();
  const [descendingOrder, setDescendingOrder] = useState(false);
  const [searchName, setSearchName] = useState('');
  const [searchDepartment, setSearchDepartment] = useState('');

  const handleNameSort = () => {
    const sortedData = [...storedData].sort((a, b) => {
      return descendingOrder
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    });
    setStoredData(sortedData);
    setDescendingOrder((prev) => !prev);
  };

  const handleResetSort = () => {
    const sortedData = [...storedData].sort((a, b) => {
      return a.id - b.id;
    });
    setStoredData(sortedData);
  };

  let searchedData = storedData
    .filter((emp) => {
      if (searchName) {
        return emp.name.toLowerCase().includes(searchName.toLowerCase());
      }
      return true;
    })
    .filter((emp) => {
      if (searchDepartment) {
        return emp.department
          .toLowerCase()
          .includes(searchDepartment.toLowerCase());
      }
      return true;
    });

  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>
              <SortIcon onClick={handleResetSort} />
            </th>
            <th>
              <S.TableHead>
                Name
                <input
                  type="text"
                  value={searchName}
                  onChange={(e) => setSearchName(e.target.value)}
                />
                <SortIcon onClick={handleNameSort} />
              </S.TableHead>
            </th>
            <th>
              <S.TableHead>
                Deparetment
                <input
                  type="text"
                  value={searchDepartment}
                  onChange={(e) => setSearchDepartment(e.target.value)}
                />
              </S.TableHead>
            </th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {searchName && searchedData.length == 0 ? (
            <tr>
              <td style={{ textAlign: 'center' }} colSpan={4}>
                No such data
              </td>
            </tr>
          ) : (
            searchedData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.department}</td>
                <td>{item.role}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </S.Container>
  );
}

const S = {};

S.Container = styled.div`
  padding: 0 22px;
  width: 100%;
  overflow: auto;

  input {
    grid-area: input;
    padding: 4px 6px;
    border: 1px solid ${({ theme }) => theme.colors.blue};
    border-radius: 6px;
    font-size: 16px;
    line-height: 24px;

    width: 130px;
    &:active,
    &:focus {
      border-color: ${({ theme }) => theme.colors.blue};
    }

    &::placeholder {
      opacity: 0.5;
    }
  }
`;

S.TableHead = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

const SortIcon = styled(SortSVG)`
  cursor: pointer;
`;
