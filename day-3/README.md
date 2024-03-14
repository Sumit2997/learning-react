# app

/\*_
config driven ui
unique id is important as it tells react the extent to which an element has to be rerendered
not using keys (not acceptable) <<< use index key<<<<unique id (best practice)
_/

-default Export/Import
export default component
import component from 'path'

-named Export/Import
export const component
import {component} from 'path'

# react hooks

normal js utility function
-useState()-state variables
whenever state variable update react re-renders this component
-useEffect()

react uses reconciliation algo also know as react fiber for dom manipulation.
virtual dom is representation of actual dom
virtual dom react is normal js object
useState returns an array 

