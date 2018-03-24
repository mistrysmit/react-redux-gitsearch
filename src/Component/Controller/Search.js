import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { setData, chageSearchText } from '../Store/action';
import Search from '../UI/Search';


const mapStateToProps = (state, props) =>
    ({
        serachval: state.SearchText
    })

const mapDispatchToProps = dispatch =>
    ({
        SetMySearchData(v){
        console.log("value come from search"+v);
       
            const apiUrl = `https://api.github.com/search/users?q=papa`
            fetch(apiUrl)
                .then(result => result.json())
                .then(result => result.items)
                .then(items => {
                    dispatch(
                        setData(items)
                    )
                    console.log(items);
                }
                );

        },
        onSearchChange(v){
            dispatch(
                chageSearchText(v)
            )
        }
    })

const Container = connect(mapStateToProps, mapDispatchToProps)(Search)

export default withRouter(Container)


