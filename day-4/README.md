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

# monolith and microservice architecture
-Monolith architecture in software is like building a single, large, all-in-one machine where every part is connected and works together.
-Microservice
seperation of consults and single responsibilty principle where each and every service has it own job.different programming language for different services that are communicating with each other. all services run on different port and all these port are mapped on same domain