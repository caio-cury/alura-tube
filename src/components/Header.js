import config from "../../config.json";
import styled from "styled-components";

const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%
    }
    .user-info {
        display: flex;
        flex-direction: column;
    }
`
function Header() {
    return (
        <StyledHeader>
            {/* <img src="banner" /> */}
            <div className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <h2>{config.name}</h2>
                <h2>{config.job}</h2>
            </div>
        </StyledHeader>
    )
}

export default Header;