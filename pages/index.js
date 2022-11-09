import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
    return (
        <div>
            <Menu />
            <CSSReset />
            <Header />
            <Timeline playlists={config.playlists} />
        </div>
    );
}

export default HomePage;

const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin-top: 60px;
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

function Timeline(props) {
    const playlistNames = Object.keys(props.playlists);
    return (
        <StyledTimeline>
            {playlistNames.map(playlistName => {
                const videos = props.playlists[playlistName];
                return (
                    < section key={playlistName} >
                        <h2>{playlistName}</h2>
                        <div>
                            {
                                videos.map(video => {
                                    return (
                                        <a
                                            key={video.title}
                                            href={video.url}
                                        >
                                            <img src={video.thumb} />
                                            <span>{video.title}</span>
                                        </a>
                                    )
                                })
                            }

                        </div>
                    </section>

                )
            }
            )}
        </StyledTimeline >
    )
}
