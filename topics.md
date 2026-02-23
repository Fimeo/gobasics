As a golang developer

Go memory model

Happens-before (mutex, channels, atomic, WaitGroup)

Data races and why “it works on my machine” is a lie

Goroutine scheduling (G, M, P model)

Preemption and why tight CPU loops can starve other goroutines

Channel internals (buffered vs unbuffered, blocking semantics)

select behavior (fairness, pseudo-random case picking)

Closing channels (who closes, what receivers observe after close)

Nil channels (send/recv blocks forever, select case effectively disabled)

Context cancellation (deadlines, propagation, cleanup patterns)

sync.Once internals and common deadlock patterns

sync.Pool (what it is, what it is not, GC interaction)

Escape analysis (stack vs heap) and reading -gcflags output

Pointer vs value receivers (method sets, interface satisfaction)

Interfaces under the hood (itab, dynamic type/value)

Empty interface and type assertions cost

defer internals and why defer inside hot loops hurts

panic/recover rules (only recovers in deferred funcs in same goroutine)

Map internals (hashing, buckets, growth, iteration order randomness)

Map concurrency rules (why concurrent writes can crash)

Slices internals (len/cap, append growth, shared backing arrays)

String immutability + string/[]byte conversions (copies and allocations)

GC basics (tri-color marking, STW phases)

Write barrier (why it exists, performance impact)

GOMAXPROCS and what it really controls

atomic.Value vs mutex vs channels (when to use which)

Memory alignment + false sharing in structs

pprof basics (CPU, heap, goroutine, mutex profiling)

cgo overhead (why crossing the boundary is expensive)

net/http Transport internals (keep-alive, pooling, timeouts)

http.Client reuse (why per-request clients are a bug)

JSON encoding pitfalls (numbers, interface{}, allocations)

Generics in Go (type params, constraints, instantiation)

init() order and package init traps

Build tags + module replace (why builds can silently change)

Embedding vs inheritance (promotion, ambiguity, zero values)

Error handling patterns (wrapping, http://errors.Is / As, sentinel errors)

Race detector usage (what it catches, what it cannot prove)