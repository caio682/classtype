function ApiVersion(version: string) {
    return (target: any) => {
        Object.assign(target.prototype, { __version: version });
    }
}


function minLenght(lenght: number) {
    return (target: any, key: string) => {
        let _value = target[key];
        // console.log(key);

        const getter = () => "[play]" + _value;
        const setter = (value: string) => {
            if(value.length < lenght) {
                throw new Error(`Tamanho menor do que ${lenght}`)
            } else {
                _value = value;
            }
        };
        Object.defineProperty(target, key,{
            get: getter,
            set: setter,
        } ) 
    };
}

// @ApiVersion("1.10")
class Api {
    @minLenght(10)
    name: string
    constructor(name: string) {
        this.name = name;
    }
}

const api = new Api("usuariousj");
console.log(api.name);



