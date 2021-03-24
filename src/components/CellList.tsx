import { Fragment } from 'react';
import { useTypedSelector } from '../hooks/useSelector';
import { AddCell } from './AddCell';
import { CellItem } from './CellItem';

export const CellList: React.FC = () => {
    const cells = useTypedSelector(({ cells: { order, data } }) =>
        order.map((id) => data[id])
    );

    const renderedCells = cells.map((cell) => (
        <Fragment key={cell.id}>
            <AddCell nextCellId={cell.id} />
            <CellItem key={cell.id} cell={cell} />
        </Fragment>
    ));

    return (
        <div>
            {renderedCells}
            <AddCell nextCellId={null} forceVisible={true} />
        </div>
    );
};
