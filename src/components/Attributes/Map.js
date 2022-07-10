function Map({ listType }){
    listType.map(
        (value, index) => {
            return <li key={index}>{value}</li>
        }
    );
}
export default Map;