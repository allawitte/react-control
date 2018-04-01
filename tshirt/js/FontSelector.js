const FontSelector = ({fonts, selectedFont, onSelect}) => {
    const getFontSection = ()=> {
        const makeSelect = item => {
            return function(){
                selectedFont = item;
                onSelect(selectedFont);
            }
        }
        return fonts.map((item) => {
            return (
                <div className="grid center font-item">
                    <input type="radio"
                           name="font"
                           value={item.name}
                           id={item.name}
                           onChange={makeSelect(item)}/>
                    <label htmlFor={item.name} className="grid-1">
                        <PictureFont text={'abc'} path={item.path}/>
                    </label>
                </div>
            )
        })
    }
    return (
        <div className="font-picker">
            {getFontSection()}
        </div>
    )
};

const TextRenderLine = ({value, onChange}) => {
    const changeText = e=> {
        onChange(e.target.value)
    }
    return (
        <div class="type-text">
            <textarea name="text"
                      id="font-text"
                      cols="30" rows="2"
                      defaultValue={value}
                      onKeyDown={changeText}
                      placeholder="Введите текст для футболки">

            </textarea>
        </div>
    )
}