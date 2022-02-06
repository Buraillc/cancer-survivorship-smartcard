import React, { ReactElement, FC } from "react";
​
// define interface to represent component props
interface Props {
    title: String
}

const Header: FC<any> = (): ReactElement => {
    return (
        <div>
            {`Header`}
        </div>
    );
};
​
export default Header;
