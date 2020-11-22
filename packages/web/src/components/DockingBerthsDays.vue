<template>
    <ul class="days">
        <li class="selected">23</li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        <li>29</li>
    </ul>
</template>

<script>
export default {
}
</script>

<style scoped>
    .days {
        display: flex;
        justify-content: space-around;
        margin-top: 30px;
        position: relative;
        border-bottom: 2px solid #e9e9e9;
        padding-bottom: 30px;
    }

    .days li {
        font-size: 18px;
        font-weight: bold;
        background-color: #ddd;
        display: block;
        padding: 10px;
        border-radius: 50%;
        cursor: pointer;
    }

    .days li:not(.selected ):hover {
        background-color: #bbb;
    }

    .days .selected {
        background-color: #F59D67;
        color: #fff;
        position: relative;
    }

    .days .selected::after {
        content: "";
        display: block;
        width: 100%;
        height: 2px;
        position: absolute;
        background-color: #F59D67;
        left: 0;
        bottom: -32px;
    }

</style>