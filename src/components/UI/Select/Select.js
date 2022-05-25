import React from 'react';
import "./Select.scss";
// import { ArrowSelectIcon } from '../Icons/ArrowSelectIcon';

// const useStyles = makeStyles(({ palette: { icon, primary }, breakpoints }) => ({
//   '@keyframes showSelect': {
//     '0%': {
//       opacity: 0,
//       transform: 'translateY(-50px)',
//     },
//     '100%': {
//       opacity: 1,
//       transform: 'translateY(0)',
//     },
//   },
//   select: {
//     display: 'grid',
//     gridTemplateColumns: '1fr auto',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     position: 'relative',
//     width: '100%',
//     height: '100%',
//     cursor: ({ disable }) => disable ? 'default' : 'pointer',
//     paddingLeft: 16,
//   },
//   optionsBlock: {
//     position: 'absolute',
//     width: '100%',
//     top: 51,
//   },
//   options: {
//     position: 'absolute',
//     left: 0,
//     top: 32,
//     width: '100%',
//     maxHeight: '260px',
//     borderRadius: '0 0 4px 4px',
//     zIndex: 3,
//     background: primary.dim,
//     overflowY: 'auto',
//     animation: '$showSelect .1s ease-in-out',
//     borderTop: `1px solid ${primary.main}`,
//     '&::-webkit-scrollbar': {
//       width: 8,
//     },
//     '&::-webkit-scrollbar-thumb': {
//       borderRadius: 10,
//       backgroundColor: primary.main,
//     },
//   },
//   backgroundSelect: {
//     position: 'fixed',
//     bottom: 0,
//     left: 0,
//     content: '""',
//     width: '100%',
//     height: '100%',
//     backgroundColor: primary.backdrop,
//     // opacity: 0.5,
//     zIndex: 2,
//   },
//   headerTitle: {
//     position: 'relative',
//     color: icon.main,
//     padding: '9px 0 8px 0px',
//     paddingLeft: 16,
//     display: 'flex',
//     justifyContent: 'flex-start',
//     background: primary.dim,
//     borderRadius: '4px 4px 0 0',
//     zIndex: 3,
//   },
//   textTitle: {
//     whiteSpace: 'nowrap',
//     overflow: 'hidden',
//     textOverflow: 'ellipsis',
//     [breakpoints.down('sm')]: {
//       whiteSpace: 'nowrap',
//       overflow: 'hidden',
//       textOverflow: 'ellipsis',
//       paddingRight: '10px',
//     },
//   },
//   elementSelect: {
//     display: 'flex',
//     alignItems: 'center',
//     position: 'relative',
//     padding: '6px 20px 6px 16px',
//     maxWidth: '100%',
//     backgroundColor: ({ isToggle }) => isToggle && primary.dim40,
//     textOverflow: 'ellipsis',
//     fontWeight: 'lighter',
//     '&:hover': {
//       transition: '0.3s',
//       backgroundColor: primary.dim40,
//       '&:after': {
//         position: 'absolute',
//         bottom: '0',
//         left: '0',
//         content: '""',
//         width: '100%',
//         height: '1px',
//         backgroundColor: primary.main,
//       },
//       '&:not(:first-child):before': {
//         position: 'absolute',
//         top: '0',
//         left: '0',
//         content: '""',
//         width: '100%',
//         height: '1px',
//         backgroundColor: primary.main,
//       },
//     },
//   },
// }));

export const Select = ({ value, array, setValue, openSelect, setOpenSelect, error, setError }) => {

  const selectHandler = (e) => {
    e.stopPropagation();
    setOpenSelect(false);
    setValue(e.target.innerText);
    setError(false);
  };

  return (
    <div className="select-wrapper">
      <div className="select">
        <div className={error ? "select-textTitle select-textTitle-error" : "select-textTitle"} onClick={() => setOpenSelect(true)}>
          {value}
          <div className={openSelect ? "select-arrow" : "select-arrow select-arrow-down"} />
        </div>
        {openSelect && (
          <>
            <div
              className="backgroundSelect"
              onClick={(e) => {
                e.stopPropagation();
                setOpenSelect(false);
              }}
            />
            <div className="select-optionsBlock">
              <ul className="select-options">
                {array.map((elem) => {
                  return (
                    <li key={elem} className="elementSelect" onClick={selectHandler} value={elem}>
                      {elem}
                    </li>
                  );
                })}
              </ul>
            </div>
          </>

        )}
      </div>
      {error && <div className="select-text-error">Заполните поле</div>}
    </div>

  );
};
