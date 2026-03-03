// // import { useState } from "react"

// // function App() {
// //   const categories = ["All", "Food", "Health", "Transport", "Entertainment", "Shopping", "Others"]
// //   const [expenses, setExpenses] = useState([]);
// //   const [id, setId] = useState(1);
// //   const [desc, setDesc] = useState("");
// //   const [category, setCategory] = useState("All");
// //   const [price, setPrice] = useState("");
// //   const [filteredData, setFilteredData] = useState([]);
// //   const [activeFilter, setActiveFilter] = useState("All");

// //   function handleExpense() {
// //     if (!desc || !price || !category) return;
// //     const obj = {
// //       id: id,
// //       description: desc,
// //       category: category,
// //       price: Number(price),
// //       date: new Date().toLocaleDateString()
// //     }
// //     const updatedExpenses = [...expenses, obj]
// //     setExpenses(updatedExpenses)
// //     setId(prev => prev + 1)
// //     setCategory("All")
// //     setDesc("")
// //     setPrice("")
// //     showfilteredData("All", updatedExpenses)
// //     setActiveFilter("All")
// //   }

// //   function showfilteredData(cat, d = expenses) {
// //     const data = cat === 'All' ? d : d.filter((e) => e.category === cat)
// //     setFilteredData(data)
// //     setActiveFilter(cat)
// //   }

// //   function handleDelete(idx) {
// //     const updated = expenses.filter((e) => e.id !== idx)
// //     setExpenses(updated)
// //     showfilteredData(activeFilter, updated)
// //   }

// //   function sortByDate() {
// //     const sorted = [...expenses].sort((a, b) => new Date(a.date) - new Date(b.date))
// //     setExpenses(sorted)
// //     showfilteredData(activeFilter, sorted)
// //   }

// //   const Total = expenses.reduce((sum, e) => sum + e.price, 0)

// //   const categoryColors = {
// //     Food: "bg-orange-100 text-orange-700",
// //     Health: "bg-green-100 text-green-700",
// //     Transport: "bg-blue-100 text-blue-700",
// //     Entertainment: "bg-purple-100 text-purple-700",
// //     Shopping: "bg-pink-100 text-pink-700",
// //     Others: "bg-gray-100 text-gray-700",
// //     All: "bg-slate-100 text-slate-700",
// //   }

// //   const categoryIcons = {
// //     Food: "🍔",
// //     Health: "💊",
// //     Transport: "🚗",
// //     Entertainment: "🎬",
// //     Shopping: "🛍️",
// //     Others: "📦",
// //     All: "📋",
// //   }

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 font-sans">
// //       <div className="max-w-6xl mx-auto">

// //         {/* Header */}
// //         <div className="mb-8">
// //           <h1 className="text-4xl font-bold text-white tracking-tight">Expense <span className="text-emerald-400">Tracker</span></h1>
// //           <p className="text-slate-400 mt-1">Track and manage your spending</p>
// //         </div>

// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //           <div className="col-span-1 md:col-span-2 space-y-4">


// //             {/* Add Expense Form */}
// //             <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5">
// //               <h2 className="text-white font-semibold text-lg mb-4">Add Expense</h2>
// //               <div className="space-y-3">
// //                 <input
// //                   placeholder="Description"
// //                   value={desc}
// //                   onChange={(e) => setDesc(e.target.value)}
// //                   className="w-full bg-slate-700 border border-slate-600 text-white placeholder-slate-400 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
// //                 />
// //                 <div className="flex gap-3">
// //                   <input
// //                     placeholder="0.00"
// //                     value={price}
// //                     onChange={(e) => setPrice(e.target.value)}
// //                     className="flex-1 bg-slate-700 border border-slate-600 text-white placeholder-slate-400 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
// //                   />
// //                   <select
// //                     value={category}
// //                     onChange={(e) => setCategory(e.target.value)}
// //                     className="flex-1 bg-slate-700 border border-slate-600 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
// //                   >
// //                     {categories.map((c) => (
// //                       <option value={c} key={c}>{c}</option>
// //                     ))}
// //                   </select>
// //                 </div>
// //                 <button
// //                   onClick={handleExpense}
// //                   className="w-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl py-3 transition-all duration-200 active:scale-95"
// //                 >
// //                   + Add Expense
// //                 </button>
// //               </div>
// //             </div>

// //             {/* Filters */}
// //             <div className="bg-slate-800 border border-slate-700 rounded-2xl p-4">
// //               <div className="flex flex-wrap gap-2">
// //                 {categories.map((c) => (
// //                   <button
// //                     key={c}
// //                     onClick={() => showfilteredData(c)}
// //                     className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${activeFilter === c
// //                       ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
// //                       : "bg-slate-700 text-slate-300 hover:bg-slate-600"
// //                       }`}
// //                   >
// //                     {categoryIcons[c] || "📌"} {c}
// //                   </button>
// //                 ))}
// //                 <button
// //                   onClick={sortByDate}
// //                   className="ml-auto px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-700 text-slate-300 hover:bg-slate-600 transition"
// //                 >
// //                   📅 Sort by Date
// //                 </button>
// //               </div>
// //             </div>

// //             {/* Expense List */}
// //             <div className="space-y-2">
// //               {filteredData.length === 0 ? (
// //                 <div className="bg-slate-800 border border-slate-700 rounded-2xl p-10 text-center">
// //                   <p className="text-slate-500 text-4xl mb-2">💸</p>
// //                   <p className="text-slate-400">No expenses yet. Add one above!</p>
// //                 </div>
// //               ) : (
// //                 filteredData.map((e) => (
// //                   <div
// //                     key={e.id}
// //                     className="bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 flex items-center justify-between hover:border-slate-500 transition group"
// //                   >
// //                     <div className="flex items-center gap-4">
// //                       <div className="w-10 h-10 rounded-xl bg-slate-700 flex items-center justify-center text-xl">
// //                         {categoryIcons[e.category] || "📌"}
// //                       </div>
// //                       <div>
// //                         <p className="text-white font-medium">{e.description}</p>
// //                         <div className="flex items-center gap-2 mt-0.5">
// //                           <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${categoryColors[e.category] || "bg-gray-100 text-gray-700"}`}>
// //                             {e.category}
// //                           </span>
// //                           <span className="text-slate-500 text-xs">{e.date}</span>
// //                         </div>
// //                       </div>
// //                     </div>
// //                     <div className="flex items-center gap-3">
// //                       <span className="text-red-400 font-semibold text-lg">-${e.price.toFixed(2)}</span>
// //                       <button
// //                         onClick={() => handleDelete(e.id)}
// //                         className="w-7 h-7 rounded-lg bg-slate-700 text-slate-400 hover:bg-red-500/20 hover:text-red-400 transition opacity-0 group-hover:opacity-100 text-sm"
// //                       >
// //                         ✕
// //                       </button>
// //                     </div>
// //                   </div>
// //                 ))
// //               )}
// //             </div>
// //           </div>

// //           {/* Right Panel */}
// //           <div className="space-y-4">

// //             {/* Total */}
// //             <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 text-white">
// //               <p className="text-emerald-100 text-sm font-medium">Total Spent</p>
// //               <p className="text-4xl font-bold mt-1">${Total.toFixed(2)}</p>
// //               <p className="text-emerald-100 text-sm mt-2">{expenses.length} expense{expenses.length !== 1 ? "s" : ""}</p>
// //             </div>

// //             {/* By Category */}
// //             <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5">
// //               <h3 className="text-white font-semibold mb-4">By Category</h3>
// //               {expenses.length === 0 ? (
// //                 <p className="text-slate-500 text-sm text-center py-4">No data yet</p>
// //               ) : (
// //                 <div className="space-y-3">
// //                   {categories.filter(c => c !== "All").map((cat) => {
// //                     const catTotal = expenses.filter(e => e.category === cat).reduce((s, e) => s + e.price, 0)
// //                     if (catTotal === 0) return null
// //                     const pct = Total > 0 ? (catTotal / Total) * 100 : 0
// //                     return (
// //                       <div key={cat}>
// //                         <div className="flex justify-between text-sm mb-1">
// //                           <span className="text-slate-300">{categoryIcons[cat]} {cat}</span>
// //                           <span className="text-slate-400">${catTotal.toFixed(2)}</span>
// //                         </div>
// //                         <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
// //                           <div
// //                             className="h-full bg-emerald-500 rounded-full transition-all duration-500"
// //                             style={{ width: `${pct}%` }}
// //                           />
// //                         </div>
// //                       </div>
// //                     )
// //                   })}
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default App

// import { useState } from "react"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBurger, faList, faCarSide, faHandHoldingMedical, faClapperboard, faBagShopping, faBox } from '@fortawesome/free-solid-svg-icons'

// function App() {
//   const categories = ["All", "Food", "Transport", "Health", "Entertainment", "Shopping", "others"]
//   const categoryIcons = [faList, faBurger, faCarSide, faHandHoldingMedical, faClapperboard, faBagShopping, faBox]
//   const [expenses, setExpenses] = useState([]);
//   const [id, setId] = useState(1);
//   const [desc, setDesc] = useState("");
//   const [category, setCategory] = useState("All");
//   const [price, setPrice] = useState("");
//   const [filteredData, setFilteredData] = useState([]);
//   const [Total, setTotal] = useState(0);
//   const [categoryTotal, setCategoryTotal] = useState([]);

//   function handleExpense() {
//     if (!desc || !price || !category) return;
//     const obj = {
//       id: id,
//       icon: categoryIcons[id],
//       description: desc,
//       category: category,
//       price: Number(price),
//       date: new Date().toLocaleDateString()
//     }

//     const updatedExpenses = [...expenses, obj]
//     setExpenses(updatedExpenses)
//     setId(prev => prev + 1)
//     setCategory("All")
//     setDesc("")
//     setPrice("")
//     showfilteredData("All", updatedExpenses)
//     const r = updatedExpenses.reduce((sum, e) => sum + e.price, 0)
//     setTotal(r);
//     setCategoryTotal(Object.entries(t).map(([category, price]) => ({ category, price })))
//   }

//   function showfilteredData(category, d = expenses) {
//     const data = category === 'All' ? d : d.filter((e) => {
//       return e.category === category
//     })
//     setFilteredData(data)
//   }

//   function handleDelete(idx) {
//     // setExpenses(() => d.filter((e) => {
//     //   return e.id !== idx;
//     // showfilteredData(d)
//     const updated = expenses.filter((e) => e.id !== idx)
//     setExpenses(updated)
//     showfilteredData("All", updated)
//     setTotal(updated.reduce((sum, e) => sum + e.price, 0))

//   }
//   function sortByDate(d = expenses) {
//     const sorted = [...expenses].sort((a, b) => new Date(a.date) - new Date(b.date))
//     setExpenses(sorted)
//     showfilteredData("All", sorted)
//     setTotal(updated.reduce((sum, e) => sum + e.price, 0))
//   }
//   return (
//     <>
//       <div className="main-container">

//         <div className="left-container">
//           <h1>Expenses</h1>
//           <div className="top-container">
//             <input placeholder="   Description" value={desc} onChange={(e) => setDesc(e.target.value)} className="desc" />
//             <div className="top-input" >
//               <input placeholder="  0.0" value={price} onChange={(e) => setPrice(e.target.value)} />
//               <select value={category} onChange={(e) => setCategory(e.target.value)}>
//                 {
//                   categories.map((c) => {
//                     return <option value={c} key={c} >{c}</option>
//                   })
//                 }
//               </select>
//             </div>
//             <button onClick={handleExpense} className="button">Add Expense</button>
//           </div>

//           <div className="filter-container">
//             <div> {
//               categories.map((c, idx) => {
//                 return <button key={c} onClick={() => showfilteredData(c)}><FontAwesomeIcon icon={categoryIcons[categories.indexOf(category)]} /></button>
//               })
//             }
//             </div>
//             <button onClick={sortByDate} className="date-btn">Date</button>
//           </div>

//           <div className="result-container">{
//             filteredData.map((e) => {
//               return <div key={e.id}>
//                 <span>{e.category}</span>
//                 <h2>{e.description}</h2>
//                 <p>{e.category}-{e.date}</p>
//                 <span>-${e.price}</span>
//                 <button onClick={() => handleDelete(e.id)}>X</button>
//               </div>
//             })
//           }</div>
//         </div>
//         <div className="right-container">
//           <div className="right-top">
//             <h4>Total Spent</h4>
//             <h1>${Total}</h1>
//             <h4>{expenses.length} Expenses</h4>
//           </div>
//           <div className="progress-container">
//             <h3>By category</h3>
//             <div>{
//               categoryTotal.map((e) => {
//                 return <div> <span>{e.category}</span>
//                   <progress max={Total / 100} value={(Total - e.price) / 100}></progress>
//                   <p>${e.price}</p>
//                 </div>
//               })
//             }</div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default App


